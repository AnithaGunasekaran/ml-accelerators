import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { TemplatesService } from '../extract/services/templates.service';
import { Documents } from '../extract/models/documents';
import { Router } from '@angular/router';
import { HomeService } from '../home/services/home.service';
import { environment } from '../../../environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({ opacity: 1}),
          animate('500ms', style({ opacity: 0}))
        ])
      ]
    )
  ],
  encapsulation: ViewEncapsulation.None
})
export class ExtractComponent implements OnInit {

  docsArray:Documents[] = [];
  pdfSrc:any ;
  isLoading: Boolean = false;
  display: boolean = false;
  showExtract: boolean = false;
  isFetching: boolean = true;
  processedFiles: number = 0;
  total: number= 0;
  selectedTemplates = [];
  processingTime: number = 0;
  stopClock: boolean = false;
  jsonHTML: string = '';
  show: string = 'hide';
  extractText: string = "Extract";
  disableExtract: Boolean = false;
  imageH: number=0;
  errorMessage: string = '';

  constructor(private apiService:TemplatesService, private router: Router, private homeSer:HomeService) { }

  ngOnInit() {
      this.homeSer.currentSelectedTemplates.subscribe((res)=>{
        this.selectedTemplates = res;
      })
      if(this.selectedTemplates.length === 0){
        this.router.navigate(['home']);
      }
      var pArr = []; let failedPromises = [];
      this.isLoading = true;
      this.selectedTemplates.map((item:any)=>{
        console.log(item.name)
          pArr.push(this.apiService.fetchFiles(environment.usecaseId,item.name).then((res:any)=>{
            res.map((items) => {
              this.docsArray.push(Object.assign(items, {status: "Not started"}, {json:''}, {pdfLink: items.name}))
            });
          }).catch((err)=>{
             failedPromises.push(err)
          }));
      });
      Promise.all(pArr).then(()=>{
        let serverErr = failedPromises.filter((item) =>{
          return item.status >= 400 || item.status <= 500
        });
        if(serverErr.length > 0){
          this.errorMessage = "Unable to fetch documents. Please try again later..."
        }
        else{
          if(failedPromises.length !== 0){
            let templateNames = '';
            failedPromises.map((err)=>{
                templateNames += `${err.message}`
            })
            this.errorMessage = `Documents matching templates - ${templateNames} cannot be retrieved`;
          }
        }
      }).catch(()=>{
        this.errorMessage = "Unable to fetch documents matching certain templates(s). Please try again later";
      }).finally(()=>{
         this.total = this.docsArray.length;
         this.showExtract = true;
         this.isFetching = false;
         this.isLoading = false;
      });
  }

  openPDF($event,templateName,itemName){
    $event.preventDefault();
    this.isLoading = true;
    this.apiService.fetchPDF(environment.usecaseId,templateName,itemName).then((res:any)=>{
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
      // var a = document.createElement("a");
      // document.body.appendChild(a);
      // a.href = fileURL;
      // a.target = '_blank';
      // a.click();
     }).catch(()=>{
      this.errorMessage = `Cannot fetch the PDF - ${itemName}`;
    }).finally(()=>{
       this.isLoading = false;
    });
  }

  extractJSON(){
      this.isLoading = true;
      var timerId = setInterval(()=>{
        if(!this.stopClock){
            this.processingTime +=1;
        }
        else{
          clearInterval(timerId);
        }
      },1000);
      this.total = this.docsArray.length;
      this.extractText = "Extracting...";
      this.disableExtract = true;
      var extractArr = [];
      this.docsArray.map((item, index)=>{
        item.status = "In progress"
        extractArr.push(this.apiService.extractJSON(environment.usecaseId,item.template_name, item.file_name).then((res:any)=>{
              item.status = `Completed`;
              item.json = res; 
              this.show = 'show';
              this.processedFiles++;
           
        }).catch((err)=>{
          item.status = "Unable to fetch data";
          this.extractText = "Extract";
          this.disableExtract = true;
        }))
      })
      Promise.all(extractArr).then(()=>{
        this.stopClock = true;
        this.extractText = "Extract";
        this.disableExtract = true;
      }).catch((err)=>{
          console.log(err)
      }).finally(()=>{
        this.isLoading = false;
     });;
  }

  formatJSON(json,className){
      var htmlTable = "<table class='"+className+"' cellpadding='0' cellspacing='0'>"
      var rowLength = 1;//(className === 'resultTable'? 1 : 1);
      var colcount = 1;
      htmlTable += "<tr>";
      for(var key in json){
          if(colcount > 5 && className == 'resultTable'){
              break;
          }
          htmlTable += `<th>${key}</th>`;
          if(typeof json[key] !== "string"){
            rowLength = json[key].length;
          }
          colcount++;
      }
      htmlTable += "</tr>";
      colcount = 1;
      for(var i = 0; i <rowLength; i++){
          htmlTable += "<tr>";
          for(var key in json){
            if((colcount > 5 && className === 'resultTable') || (Object.keys(json).length+1 === colcount && className === 'resultTable')){
                break;
            }
            else{
                if(typeof json[key] == "string"){
                    htmlTable += `<td width="10%">${json[key]}</td>`;
                }
                else{
                    htmlTable += `<td width="10%">${json[key][i]}</td>`
                }
              
            }
            colcount++;
          }
          htmlTable += "</tr>";
      }
      htmlTable+= '</table>';
    
      return htmlTable;
  }

  open(doc) {
    
    this.imageH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100;
    this.isLoading = true;
    if(doc.json !== ""){
      this.pdfSrc = "";
      this.jsonHTML = this.formatJSON(doc.json,"jsonTable");
      this.apiService.fetchPDF(environment.usecaseId,doc.template_name, doc.file_name).then((res:any)=>{
        const fileURL = URL.createObjectURL(res);
        this.pdfSrc = fileURL;
      }).finally(()=>{
        this.display = true;
        this.isLoading = false;
      })
    }
  }
  
}
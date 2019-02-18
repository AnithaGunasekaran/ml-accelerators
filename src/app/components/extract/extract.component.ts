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
  display: boolean = false;
  showExtract: boolean = false;
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
      this.selectedTemplates.map((item:any)=>{
          pArr.push(this.apiService.fetchFiles(item.id).then((res:any)=>{
              if(res.code === 200){
                  res.result.map((items) => {
                    this.docsArray.push(Object.assign(items, {status: "Not started"}, {json:''}, {pdfLink:  `<a target="_blanxk" href="${environment.public}${items.link}">${items.name}</a>`}))
                  });
              }
              else{
                throw new Error(item.name)
              }
          }).catch((err)=>{
             failedPromises.push(err)
          }));
      });
      Promise.all(pArr).then((data)=>{
        
        if(failedPromises.length !== 0){
          let templateNames = '';
          failedPromises.map((err)=>{
              templateNames += ` ${err.message}`
          })
          
          this.errorMessage = `Documents matching templates - ${templateNames} cannot be retrieved`;
        }
        this.total = this.docsArray.length;
        this.showExtract = true;
      }).catch((err)=>{
        
        this.total = this.docsArray.length;
        this.showExtract = true;
        this.errorMessage = "Unable to fetch documents matching certain templates(s). Please try again later";
      });
  }

  extractJSON(){
      var timerId = setInterval(()=>{
        if(!this.stopClock){
            this.processingTime +=0.5;
        }
        else{
          clearInterval(timerId);
        }
      },500);
      this.total = this.docsArray.length;
      this.extractText = "Extracting...";
      this.disableExtract = true;
      var extractArr = [];
      this.docsArray.map((item, index)=>{
        item.status = "In progress"
        extractArr.push(this.apiService.extractJSON(item.id).then((res)=>{
            if(res.code == 200){
              item.status = `${item.id} - Completed`;
              item.json = res.result; 
              this.show = 'show';
              this.processedFiles++;
            }
            else{
              throw new Error("Exception")
            }
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
      });
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
    if(doc.json !== ""){
      this.display = true;
      this.pdfSrc = `${environment.public}${doc.preview}`;
      this.jsonHTML = this.formatJSON(doc.json,"jsonTable");
    }
  }
}

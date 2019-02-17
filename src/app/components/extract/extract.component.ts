import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { TemplatesService } from '../../services/templates.service';
import { Documents } from '../../models/documents';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExtractComponent implements OnInit {

  docsArray:Documents[] = [];
  pdfSrc:any ;
  display: boolean = false;
  showExtract: boolean = true;
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
    var pArr = [];


    for(var i = 0; i < this.selectedTemplates.length; i++){
      var name = this.selectedTemplates[i].name;
        pArr.push(this.apiService.fetchFiles(this.selectedTemplates[i].id).then((res:any)=>{
        
        
          if(res.code === 200){
            let docs = res.result;
            for(let j= 0; j < docs.length; j++){
              docs[j].status = "Not started";
              docs[j].json = "";
              docs[j].name = `<a target="_blank" href="https://ml-endpointv1.firebaseapp.com/${docs[j].link}">${docs[j].name}</a>`
              this.docsArray.push(docs[j]);
              this.total = this.docsArray.length;
            }
          }
          else{
            this.errorMessage = `Unable to fetch documents matching template(s)`
          }
        }));
      }
      Promise.all(pArr).then(()=>{
        this.total = this.docsArray.length;
      }).catch((err)=>{
       
        console.log(err)
        if(err.status === 504){
          this.errorMessage = "Unable to fetch document(s) matching certain template(s)";
          return;
        }
        if(err.status === 500){
          this.errorMessage = "Unable to fetch documents. Please try again"
        }
        this.errorMessage = "Unable to fetch documents. Please try again later";
        this.showExtract = false;
        //Log error to filek
      });
  }

  extractJSON(){
    var timerId = setInterval(()=>{
      if(!this.stopClock){
          this.processingTime += 1;
      }
      else{
        clearInterval(timerId);
      }
    },1000)
    
    this.total = this.docsArray.length;
    var startTime: any = new Date(); 
    this.extractText = "Extracting...";
    this.disableExtract = true;
    this.docsArray.map((item, index)=>{
      item.status = "In progress"
      return this.apiService.extractJSON(item.id).then((res)=>{
         console.log(res.result)
          if(res.code == 200){
            item.status = "Completed";
            item.json = res.result; 
            this.show = 'show';
            this.processedFiles++;
            if(this.total === this.processedFiles){
              this.stopClock = true;
              this.extractText = "Extract";
              this.disableExtract = false;
            }
          }
          else{
            throw new Error("Exception")
          }
      }).catch((err)=>{
        
        item.status = "Unable to fetch data";
        this.extractText = "Extract";
        this.disableExtract = false;
      })
    })
  }
  
  previewJSON(json){
    var htmlTable = "<table class='resultTable' cellpadding='0' cellspacing='0'>"
  
     var colcount = 1;
     htmlTable += "<tr>";
     for(var key in json){
      
       htmlTable += `<th>${key}</th>`;
       colcount++;
       if(colcount > 5){
         break;
       }
     }
     htmlTable += "</tr>";
     colcount = 1;
      htmlTable += "<tr>";
      for(var key in json){
        if(colcount > 5){
          break;
        }
        if(typeof json[key] == "string"){
          htmlTable += `<td width="10%">${json[key]}</td>`;
        }
        else{
          htmlTable += `<td  width="10%">${json[key][0]}</td>`
        }
        colcount++;
      }
      htmlTable += "</tr>";
     
     
     htmlTable+= '</table>';
    
     return htmlTable;
  }
  formatJSON(json,className){
    var htmlTable = "<table class='"+className+"' cellpadding='0' cellspacing='0'>"
     var rowLength = 0;
     var colcount = 0;
     htmlTable += "<tr>";
     for(var key in json){
       
         htmlTable += `<th>${key}</th>`;
         if(typeof json[key] !== "string"){
          rowLength = json[key].length;
        }
     }
     htmlTable += "</tr>";
    
    
     for(var i = 0; i < rowLength; i++){
      htmlTable += "<tr>";
      for(var key in json){
        if(typeof json[key] == "string"){
          htmlTable += `<td width="10%">${json[key]}</td>`;
        }
        else{
          htmlTable += `<td  width="10%">${json[key][i]}</td>`
        }
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
      this.pdfSrc = `https://ml-endpointv1.firebaseapp.com/${doc.preview}`;
      this.jsonHTML = this.formatJSON(doc.json,"jsonTable");
    }
    
  
  }

  
}



 // Promise.all(pArr).then(()=>{
        //    this.total = this.docsArray.length;
        
        //    setTimeout(()=>{
        //     this.docsArray.map((item, index)=>{
        //       item.status = "In progress"
        //       return this.apiService.extractJSON(item.id).then((res)=>{
        //           item.status = "Completed";
        //           item.json = res; 
        //           this.show = 'show';
        //           this.processedFiles++;
        //           if(this.total === this.processedFiles){
        //             this.stopClock = true;
        //           }
        //        })
        //     })
        //   }, 1000);
        // })

 /* Fetch and issue request as it comes
       this.selectedTemplates.map((item)=>{
            var promisesArray = this.apiService.fetchFiles(item).then((docs)=>{
               this.total += docs.length;
               for(let j= 0; j < docs.length; j++){
                  docs[j].status = "0";
                  docs[j].json = "";
                  docs[j].name = `<a target="_blank" href="https://ml-endpointv1.firebaseapp.com/${docs[j].link}">${docs[j].name}</a>`
                  this.docsArray.push(docs[j]);
                  docs[j].status = "45";
                  
                  var promiseArray = this.apiService.extractJSON(docs[j].id).then((res)=>{
                      docs[j].status = "100";
                      docs[j].json = res;
                      this.processedFiles++;
                      console.log(this.processedFiles, this.total);
                      if(this.processedFiles === this.total){
                          this.stopClock = true;
                      }
                  });
               }
               
            })
        })
        */
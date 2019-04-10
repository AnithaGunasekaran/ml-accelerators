import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TrainService } from './services/train.service';
import { environment } from '../../../environments/environment';
import { Metadata } from './models/metadata';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeService } from '../home/services/home.service';
import { TemplatesService } from '../extract/services/templates.service'; 
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';

export interface SelectedTemplate{
  name:string,
  id: string
}
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('1000ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({ opacity: 1}),
          animate('1000ms', style({ opacity: 0}))
        ])
      ]
    )
  ]
})

export class TrainComponent implements OnInit {

  selectedTemplate:string;
  temp:any="";
  selectedTemplateName:string;
  currID: number = 0;
  pdfArr:any = [];
  isLoading: boolean = false;
  isPdfLoading: boolean = true;
  pdfSrc: string = '';
  errorMessage: string = '';
  fields = {};
  dynamicJSON: any;
  message:string = '';
  trainFormGroup:FormGroup;
  fieldKeys:any = [];
  totalPages:number = 0;
  currPage: number = 1;
  items:any;
  showPrev:boolean = false;
  showNext:boolean = true;
  trainingJSON: any;
  showAutopopulate: boolean = false;

  constructor(private route:ActivatedRoute, private middleware:TrainService,private formBuilder:FormBuilder, private homeSer:HomeService,private router:Router, private templateService:TemplatesService, private modalService: NgbModal) { }

  ngOnInit() {
  
    
    //Grab the selected template from Home Page
    this.homeSer.currentSelectedTemplate.subscribe((res:any)=>{

      if(res.length === 0 || res === undefined){
        this.router.navigate(['home'])
      }
      this.selectedTemplateName = res[0].name;
      
      
    })
    this.isLoading = true;
    this.isPdfLoading= true;
    this.middleware.getMetaData(environment.usecaseId,this.selectedTemplateName).then((data:Metadata)=>{
  
       this.buildForm(data);
      
    }).catch((err)=>{
        this.errorMessage = `Unable to fetch matadata matching the template - ${this.selectedTemplateName}`;
    }).finally(()=>{
      
    })
    
    this.middleware.getTrainingPdfs(environment.usecaseId,this.selectedTemplateName).then((res:any)=>{
      console.log(res)
      this.pdfArr = res.docs;
      this.pdfSrc = environment.public + this.pdfArr[0].link;
      // this.trainingJSON = res;
      let docsArray = [];
      for(var i = 0; i < res.docs.length; i++){
          let doc = res.docs[i];
          docsArray[i] = { "doc": doc.doc, "link": doc.link}
          
      }
      this.trainingJSON = {"docs": docsArray, "template_id": res.template_id}
      console.log(this.trainingJSON)
      //this.fetchPDF(this.selectedTemplateName,this.pdfArr[0].link);
     
    }).catch((err)=>{
      this.errorMessage = `Unable to fetch the PDFs matching the template - ${this.selectedTemplateName}`;
    }).finally(()=>{
      this.isLoading = false;
    })

    
  }

  fetchPDF(templateName, fileName){
    
    this.templateService.fetchPDF(environment.usecaseId, templateName, fileName).then((res:any)=>{
      const fileURL = URL.createObjectURL(res);
      this.pdfSrc = fileURL;
    })
  }

  buildForm(formData:any){
    //Get form fields from JSON response
    this.fields = formData.fields;

    //Build Form fields. If scalar, user FormCtl else FormArray
    const fields = {};
    for(let key in this.fields){
        let type = this.fields[key]["type"];
        this.fieldKeys.push({name: key, type:type })// For front end looping
        if(type === "scalar"){
          fields[key] = new FormControl({ value: '', disabled: false});
        }
        else if(type === "table"){
          fields[key] = new FormArray([])
        }
    }

    //Bind the controls created in the above step to the form
    this.trainFormGroup = this.formBuilder.group(fields);

    //Patch form to set default values
    for(let key in this.fields){
      let type = this.fields[key]["type"];
      if(type === "table"){
        this.trainFormGroup.setControl(key, this.formBuilder.array(['']))
      }
    }

    //Prepping JSON response to be posted to API
    //this.trainingJSON = {"template_id":this.selectedTemplateName,"docs": []};
  }

  //Method to remove FormArray controls.
  removeItem(name:string,i:number){
    const control = <FormArray>this.trainFormGroup.controls[name];
    control.removeAt(i)
  }

  //Method to add FormArray controls
  addItem(name:string): void {
   
    const control = <FormArray>this.trainFormGroup.controls[name];
    control.push(new FormControl())
  }

  onSubmit() {

    this.isLoading = true;

    this.insertEntry(this.currID);

    this.middleware.postTrainModel(environment.usecaseId,this.selectedTemplateName,this.trainingJSON).then((res:any)=>{
    
      if(res.status === 200){
        if(res.body === "Success"){
          window.alert("Training Successful");
          this.router.navigate(['home'])
        }
        else{
          window.alert(res.body);
        }
      }
      else{
        window.alert('Error trying to post data to the server');
      }
    }).catch((err)=>{
      window.alert('Error trying to post data to the server');
     
    }).finally(()=>{
      this.isLoading = false;
    });
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
    if(this.totalPages === 1){
      this.showNext = false;
      this.showPrev = false;
    }
    this.isLoading = false;
  }

  prevPDF(e){
    
    this.currPage--;
    if(this.currPage === this.totalPages){
      this.showNext = false;
    }
    else{
      this.showNext = true;
    }
    if(this.currPage !== 1){
      this.showPrev = true;
    }
    else{
      this.showPrev  = false;
    }
  }

  nextPDF(e){
    if(this.currPage <= this.totalPages){
      this.currPage++;
    }
    if(this.currPage === this.totalPages){
      this.showNext = false;
    }
    else{
      this.showNext = true;
    }
    
    if(this.currPage !== 1){
      this.showPrev = true;
    }
  }


  onProgress(progressData:any) {
    this.isPdfLoading = true;
   
    if(progressData.total !== undefined){
   
      this.isPdfLoading = false;
    }
  }

  callBackFn(pdf: any) {
    this.totalPages = Number(pdf._pdfInfo.numPages);
    // do anything with "pdf"
 }

  initiliaseFormArray(){
    for(var key in this.trainFormGroup.controls){
    
      if(this.trainFormGroup.controls[key] instanceof FormArray){
          const formArray = <FormArray>this.trainFormGroup.controls[key];
          formArray.controls=[];
          formArray.push(new FormControl())
      }
    }
  }

  autopopulate(){
      this.isLoading = true;
      //Clear existing Form data
      this.trainFormGroup.reset();

      //Reset FormArray from its prev state
      this.initiliaseFormArray();


      //let json = this.pdfArr[this.currID];

      this.populateform(this.pdfArr[this.currID]["learn"])

      // if(json.hasOwnProperty('learn')){
      //   this.populateform(this.pdfArr[this.currID]["learn"])
      //   this.showAutopopulate = true;
      // }

      this.isLoading = false;
    
  }

  saveAndClearForm(){
    //Add current form details to train JSON
    this.insertEntry(this.currID);

    //Reset form
    this.trainFormGroup.reset();
    
    //Remove unused Form Array controls from the form
    this.initiliaseFormArray();
  }
  next(){
    this.resetPDFNav();
    this.isLoading = true;
    //Save the form content to JSON file and clear unused controls
    this.saveAndClearForm()
    //Increment the current id and bind the pdf to PDF viewer
    this.currID += 1;
    this.isPdfLoading= true;
    this.pdfSrc = environment.public + this.pdfArr[this.currID].link;
    //this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)
    //Move on to next form and pre-populate the fields if they exist in final JSON
    if(this.trainingJSON["docs"][this.currID] !== undefined){
      this.populateform(this.trainingJSON["docs"][this.currID]["learn"])
    }
    this.isLoading = false;
  }

  resetPDFNav(){
    this.showPrev = false;
    this.showNext = true;
    console.log(this.currPage, this.totalPages)
    this.currPage = 1;
    this.totalPages = 0;
  }


  navigateFrom(formId){

    this.resetPDFNav();
    

    this.isLoading = true;
    //Save the form content to JSON file and clear unused controls
    this.saveAndClearForm()
    //Increment the current id and bind the pdf to PDF viewer
    this.currID = formId;
    this.isPdfLoading= true;
    this.pdfSrc = environment.public + this.pdfArr[this.currID].link;
    //this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)
    //Move on to next form and pre-populate the fields if they exist in final JSON

    console.log("Form no", this.currID);
    console.log("Form content", this.trainingJSON["docs"][this.currID])
    if(this.trainingJSON["docs"][this.currID] !== undefined){
      this.populateform(this.trainingJSON["docs"][this.currID]["learn"])
    }
    this.isLoading = false;
  }



  insertEntry(id){

    // //Add keys to the final version of JSON
    // this.trainingJSON["docs"][id] = { "doc": "" , "learn": {}};
    // //Add the PDF template to the final version of JSON
    // this.trainingJSON["docs"][id]["doc"] = this.pdfArr[id].doc;

    let scalarValues = {};
    let tabularValues = {};
    
    //Group scalar and tabular values seperately. Insert the key value pair only if the value is not empty
    for(let key in this.trainFormGroup.value){
      if(typeof this.trainFormGroup.value[key] === 'string' && this.trainFormGroup.value[key] !== ''){
        scalarValues[key] = {"type": "field", "value":  this.trainFormGroup.value[key] }
      }
      else if(typeof this.trainFormGroup.value[key] === 'object' && this.trainFormGroup.value[key] !== null ) {
        let valueArr = this.trainFormGroup.value[key];
        //Check if the entire array is empty. If not insert the key and array into JSON
        if(!(valueArr.length === valueArr.filter((item) =>  (item === null || item === '')).length)){
          tabularValues[key] = {"type": "table","values": this.trainFormGroup.value[key]}
        }
      }
    }

    //Insert the grouped fields into final JSON
    this.trainingJSON["docs"][id]["learn"]= {"fields": scalarValues, "table":{
      "fields": tabularValues
    }}
  }


  resetForm(){
    this.trainFormGroup.reset();
  }

  populateform(json){

      this.trainFormGroup.reset();

      var scalarValues = json["fields"];//Grab scalar values
      var tabularValues = json["table"]["fields"];//Grab table values
      
      //Set values of scalar fields
      for(var key in scalarValues){
        this.trainFormGroup.controls[key].setValue(scalarValues[key]["value"]);
      }

      // //Set values for tabular fields via looping through FormArray
      for(key in tabularValues){
        let itemArray = tabularValues[key].values;//Grab array values 
        let formArray  = <FormArray>this.trainFormGroup.controls[key];//Grab FormArray for the field
        formArray.controls = [];
        //Loop and bind values
        if(itemArray !== undefined){
          for(let i=0; i<itemArray.length;i++){
            const control = <FormArray>this.trainFormGroup.controls[key];
            control.push(new FormControl(itemArray[i]))
          }
        }
      }

      this.isLoading = false;
  }


  prev(){
    this.saveAndClearForm();

    this.currID--;

    this.resetPDFNav();
    
    this.isPdfLoading= true;

    this.pdfSrc = environment.public + this.pdfArr[this.currID].link;
   
    this.populateform(this.trainingJSON["docs"][this.currID]["learn"])
  }

  

}
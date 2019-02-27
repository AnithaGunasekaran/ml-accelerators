import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TrainService } from './services/train.service';
import { environment } from '../../../environments/environment';
import { Metadata } from './models/metadata';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeService } from '../home/services/home.service';
import { TemplatesService } from '../extract/services/templates.service'; 

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
  selectedTemplateName:string;
  currID: number = 0;
  pdfArr:any = [];
  isLoading: Boolean = false;
  pdfSrc: string = '';
  errorMessage: string = '';
  fields = {};
  dynamicJSON: any;
  trainFormGroup:FormGroup;
  fieldKeys:any = [];
  items:any;
  trainingJSON: any;

  constructor(private route:ActivatedRoute, private middleware:TrainService,private formBuilder:FormBuilder, private homeSer:HomeService,private router:Router, private templateService:TemplatesService) { }

  ngOnInit() {
    //Grab the selected template from Home Page
    this.homeSer.currentSelectedTemplate.subscribe((res:any)=>{
      
      // if(res.length === 0 || res === undefined){
      //   this.router.navigate(['home'])
      // }
      this.selectedTemplateName = "Template 1"//res[0].name;
      this.selectedTemplate = "1";
      
    })
    this.isLoading = true;
    this.middleware.getMetaData(environment.usecaseId,this.selectedTemplateName).then((data:Metadata)=>{
      
       if(data.code !== 200){
          throw new Error();
       }
      // this.pdfArr = data.result.templates;
       //this.pdfSrc = `${environment.public}${this.pdfArr[this.currID].link}`;
       this.buildForm(data.result);
      
    }).catch((err)=>{
        this.errorMessage = `Unable to fetch matadata matching the template - ${this.selectedTemplateName}`;
    }).finally(()=>{
      this.isLoading = false;
    })

    this.middleware.getTrainingPdfs(environment.usecaseId,this.selectedTemplateName).then((res:any)=>{
      this.pdfArr = res.result;
    
      this.fetchPDF(this.selectedTemplateName,this.pdfArr[0].file_name)
    }).catch((err)=>{
      this.errorMessage = `Unable to fetch matadata matching the template - ${this.selectedTemplateName}`;
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
    this.trainingJSON = {"template_id":this.selectedTemplateName,"docs": []};
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
    this.insertEntry(this.currID);
    this.middleware.postTrainModel(environment.usecaseId,this.selectedTemplateName,this.trainingJSON).then((res:any)=>{
      console.log(res)
    });
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

      //Get response for Auto populate
      this.middleware.getAutoPopulate(environment.usecaseId,this.selectedTemplate).then((res:any)=>{
        console.log(res)
        if(res.code !== 200){
          throw new Error('Cannot locate the data')
        }
        let json = res.result.docs[this.currID]["learn"];
        this.populateform(json)
      }).catch((err)=>{
        this.errorMessage = `Unable to fetch data matching the template - ${this.selectedTemplateName}`;
      }).finally(()=>{
        this.isLoading = false;
      }); 
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
  
    //Save the form content to JSON file and clear unused controls
    this.saveAndClearForm()

    //Increment the current id and bind the pdf to PDF viewer
    this.currID += 1;

    this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)

    //Move on to next form and pre-populate the fields if they exist in final JSON
    if(this.trainingJSON["docs"][this.currID] !== undefined){
      this.populateform(this.trainingJSON["docs"][this.currID]["learn"])
    }
  }


  insertEntry(id){
    //Add keys to the final version of JSON
    this.trainingJSON["docs"][id] = { "doc": "" , "learn": {}};
    //Add the PDF template to the final version of JSON
    this.trainingJSON["docs"][id]["doc"] = this.pdfArr[id].file_name;//'/Users/ravitejßßßagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_1.pdf'

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
  }

  prev(){
    this.saveAndClearForm();

    this.currID--;
    
    this.fetchPDF(this.selectedTemplateName,this.pdfArr[this.currID].file_name)
   
    this.populateform(this.trainingJSON["docs"][this.currID]["learn"])
  }
}
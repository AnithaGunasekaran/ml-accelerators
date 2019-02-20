import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from './services/train.service';
import { environment } from '../../../environments/environment';
import { Metadata } from './models/metadata';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


export interface SelectedTemplate{
  name:string,
  id: string
}
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})

export class TrainComponent implements OnInit {

  selectedTemplate:string;
  selectedTemplateName:string;
  currID: number = 0;
  pdfArr:any;
  imagePath: string = '';
  name: string;
  userForm: FormGroup;
  fields: any;
  dynamicJSON: any;
  questionFormGroup:FormGroup;
  userFormGroup:FormGroup;
  fieldKeys:any;
  docsArr: any;
  items:any;
  trainJSON: any;

  constructor(private route:ActivatedRoute, private middleware:TrainService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.selectedTemplate ='1'//this.route.snapshot.params['id'];
    this.selectedTemplateName = this.route.snapshot.params["name"];


    this.middleware.getMetaData(this.selectedTemplate).then((data:Metadata)=>{
 
       this.pdfArr = data.result.templates;
      
       this.imagePath = `${environment.public}${this.pdfArr[this.currID].preview}`;
      
       this.buildForm(data.result.metadata)
    })
  }

  buildForm(formData:any){
    
    this.fields = formData.fields;
    // this.fields ={
    //   "Email":{
    //     "type":"scalar",
    //   },
    //   "PO":{
    //     "type":"scalar"
    //   },
    //   "Address": {
    //      "type": "scalar",
    //   },
    //   "Test Field": {
    //     "type": "scalar"
    //   },
    //   "Item Date": {
    //      "type": "table",
    //   },
    //   "Material No.": {
    //       "type": "table",
    //   }
    // }

    this.fieldKeys = [];
    let userData = {telephones: ['']}
    const fields = {};
    for(let key in this.fields){
        let type = this.fields[key]["type"];
        this.fieldKeys.push({name: key, type:type })
        if(type === "scalar"){
          fields[key] = new FormControl({ value: '', disabled: false});
        }
        else if(type === "table"){
          fields[key] = new FormArray([])
        }
    }
    

    this.userFormGroup = this.formBuilder.group(fields);


    for(let key in this.fields){
      let type = this.fields[key]["type"];
      if(type === "table"){
        this.userFormGroup.setControl(key, this.formBuilder.array(userData.telephones))
      }
    }
    this.trainJSON = {"docs": []};
  }

  removeItem(name:string,i:number){
    const control = <FormArray>this.userFormGroup.controls[name];
    control.removeAt(i)
  }

  addItem(name:string): void {
    const control = <FormArray>this.userFormGroup.controls[name];
    control.push(new FormControl())
  }

  onSubmit() {
    this.trainJSON["template_id"] = this.selectedTemplateName;
    this.trainJSON["docs"][this.currID] = { "doc": "" , "learn": {}};
    this.trainJSON["docs"][this.currID]["doc"] = '/Users/ravitejßßßagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_1.pdf'
    let scalarValues = {};
    let tabularValues = {};
    for(let key in this.userFormGroup.value){
      if(typeof this.userFormGroup.value[key] === 'string'){
        scalarValues[key] = {"type": "field", "value":  this.userFormGroup.value[key] }
      }
      else{
        tabularValues[key] = {"type": "field","values": this.userFormGroup.value[key]}
      }
    }
   
    this.trainJSON["docs"][this.currID]["learn"]= {"fields": scalarValues, "table":{
      "fields": tabularValues
    }}
    this.trainJSON = [this.trainJSON]
}

    autopopulate(){
      let json = {
				"fields": {
					"Email": {
						"type": "field",
						"value": "Kslakekwesk;ewm21ectric.com"
					},
					"PO": {
						"type": "field",
						"value": "5700339185"
          },
					"Address": {
						"type": "field",
						"value": "ElSADFSSFSA A/S\nGJDSARISDAAdyvej 19\nO14929321I1421EJ 19\nSDAFSFSAAFASj 19\nDK AFSSARESDA Vejle"
					}
				},
				"table": {
					"fields": {
						"Item Date": {
							"type": "table",
							"values": ["12.02.2018"]
						},
						"Material No.": {
							"type": "table",
							"values": ["Mat.nr:1000470830"]
						}
					}
				}
      }

      var scalarValues = json["fields"];
      var tabularValues = json["table"]["fields"];
      for(var key in scalarValues){
        this.userFormGroup.controls[key].setValue(scalarValues[key]["value"]);
      }

      for(key in tabularValues){
        let itemArray = tabularValues[key].values;
        let formArray  = <FormArray>this.userFormGroup.controls[key];
        let firstControl = <FormControl>formArray.controls[0];
        firstControl.setValue(itemArray[0])
       
        for(let i=1; i<itemArray.length;i++){
          const control = <FormArray>this.userFormGroup.controls[key];
          control.push(new FormControl(itemArray[i]))
        }
      }

  }
  switchPDF(){
    this.trainJSON["docs"][this.currID] = { "doc": "" , "learn": {}};
    this.trainJSON["docs"][this.currID]["doc"] = '/Users/ravitejßßßagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_1.pdf'
    let scalarValues = {};
    let tabularValues = {};
    for(let key in this.userFormGroup.value){
      if(typeof this.userFormGroup.value[key] === 'string'){
        scalarValues[key] = {"type": "field", "value":  this.userFormGroup.value[key] }
      }
      else{
        tabularValues[key] = {"type": "field","values": this.userFormGroup.value[key]}
      }
    }
   
    this.trainJSON["docs"][this.currID]["learn"]= {"fields": scalarValues, "table":{
      "fields": tabularValues
    }}
    this.userFormGroup.reset();
   
    for(var key in this.userFormGroup.controls){
      if(this.userFormGroup.controls[key] instanceof FormArray){
          const formArray = <FormArray>this.userFormGroup.controls[key];
          formArray.controls=[];
          formArray.push(new FormControl())
      }
    }
    this.currID += 1;
    if(this.currID >= this.pdfArr.length -1){
      this.imagePath = `${environment.public}${this.pdfArr[this.currID].preview}`;
    }
  }

}
   

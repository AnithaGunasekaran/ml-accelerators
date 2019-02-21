import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TrainService } from './services/train.service';
import { environment } from '../../../environments/environment';
import { Metadata } from './models/metadata';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { HomeService } from '../home/services/home.service';

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
  pdfArr:string[] = [];
  pdfSrc: string = '';
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

  constructor(private route:ActivatedRoute, private middleware:TrainService,private formBuilder:FormBuilder, private homeSer:HomeService,private router:Router) { }

  ngOnInit() {
    this.homeSer.currentSelectedTemplate.subscribe((res:any)=>{
      if(res.length === 0 || res === undefined){
        this.router.navigate(['home'])
      }
      this.selectedTemplateName = res[0].name;
      this.selectedTemplate = "1";
      
    })
  
    this.middleware.getMetaData(this.selectedTemplate).then((data:Metadata)=>{
      console.log(data)
       this.pdfArr = data.result.templates;


       this.pdfSrc = `${environment.public}${this.pdfArr[this.currID].link}`;

      
      
       this.buildForm(data.result.metadata)
    })
  }

  buildForm(formData:any){
    
    this.fields = formData.fields;
  

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
 ;
    this.trainJSON = {"template_id":this.selectedTemplateName,"docs": []};
   
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
    this.insertEntry(this.currID)
  }

 autopopulate(){
      this.userFormGroup.reset();
   
      for(var key in this.userFormGroup.controls){
        if(this.userFormGroup.controls[key] instanceof FormArray){
            const formArray = <FormArray>this.userFormGroup.controls[key];
            formArray.controls=[];
            formArray.push(new FormControl())
        }
      }
      let response = {"docs": [{
				"doc": "/Users/ravitejagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_1.pdf",
				"learn": {
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
			},
			{
				"doc": "/Users/ravitejagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_2.pdf",
				"learn": {
					"fields": {
						"Email": {
							"type": "field",
							"value": "second email"
						},
						"PO": {
							"type": "field",
							"value": "LOP0128H12"
						},
						"Address": {
							"type": "field",
							"value": "J-WEQWEWQustri I/S\nMo312131264\nInd23123412ivej 28\nDSDASDA3134ed"
						}
					},
					"table": {
						"fields": {
							"Item Date": {
								"type": "table",
								"values": ["second date 1", "second date 2", "second date 3"]
							},
							"Material No.": {
								"type": "table",
								"values": ["Mat.nr:12", "Mat.nr:22", "Mat.nr:32"]
							}
						}
					}
				}
			},
			{
        "doc": "/Users/ravitejagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_3.pdf",
        "learn": {
					"fields": {
						"Email": {
							"type": "field",
							"value": "third email"
						},
						"PO": {
							"type": "field",
							"value": "LOP0128H12"
						},
						"Address": {
							"type": "field",
							"value": "J-WEQWEWQustri I/S\nMo312131264\nInd23123412ivej 28\nDSDASDA3134ed"
						}
					},
					"table": {
						"fields": {
							"Item Date": {
								"type": "table",
								"values": ["third date 1","third date 2"]
							},
							"Material No.": {
								"type": "table",
								"values": ["Mat.nr:13", "Mat.nr:23"]
							}
						}
					}
				}
			},
			{
        "doc": "/Users/ravitejagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_4.pdf",
        "learn": {
					"fields": {
						"Email": {
							"type": "field",
							"value": "kuSADSDAO0321.scSDAS4tric.com444"
						},
						"PO": {
							"type": "field",
							"value": "LOP0128H12"
						},
						"Address": {
							"type": "field",
							"value": "J-WEQWEWQustri I/S\nMo312131264\nInd23123412ivej 28\nDSDASDA3134ed"
						}
					},
					"table": {
						"fields": {
							"Item Date": {
								"type": "table",
								"values": ["13.02.2018", "13.02.2018", "13.02.2018"]
							},
							"Material No.": {
								"type": "table",
								"values": ["Mat.nr:1000601536", "Mat.nr:1000641230", "Mat.nr:1000616210"]
							}
						}
					}
				}
			}
      ]};
      let json = response.docs[this.currID]["learn"];
      this.populateform(json)
  }

  saveAndClearForm(){
    //Add current form details to train JSON
    this.insertEntry(this.currID);

    //Reset form
    this.userFormGroup.reset();
    
    //Remove unused Form Array controls from the form
    for(var key in this.userFormGroup.controls){
      if(this.userFormGroup.controls[key] instanceof FormArray){
          const formArray = <FormArray>this.userFormGroup.controls[key];
          formArray.controls=[];
          formArray.push(new FormControl())
      }
    }

  }
  next(){
    //Save the form content to JSON file and clear unused controls
    this.saveAndClearForm()
    //Increment the current id and bind the pdf to PDF viewer
    this.currID += 1;
    if(this.currID <= this.pdfArr.length -1){
      this.pdfSrc = `${environment.public}${this.pdfArr[this.currID].link}`;
    }
    this.populateform(this.trainJSON["docs"][this.currID]["learn"])
  }

  insertEntry(id){
    this.trainJSON["docs"][id] = { "doc": "" , "learn": {}};
    this.trainJSON["docs"][id]["doc"] = '/Users/ravitejßßßagarlapati/Work/Wissen/tools/pdf_extractor/data/learning_set_3/SD_1.pdf'
    let scalarValues = {};
    let tabularValues = {};
    for(let key in this.userFormGroup.value){
      if(typeof this.userFormGroup.value[key] === 'string'){
        scalarValues[key] = {"type": "field", "value":  this.userFormGroup.value[key] }
      }
      else{
        tabularValues[key] = {"type": "table","values": this.userFormGroup.value[key]}
      }
    }
    
    this.trainJSON["docs"][id]["learn"]= {"fields": scalarValues, "table":{
      "fields": tabularValues
    }}
  }

  populateform(json){
      this.userFormGroup.reset();
      var scalarValues = json["fields"];
      var tabularValues = json["table"]["fields"];
      for(var key in scalarValues){
        this.userFormGroup.controls[key].setValue(scalarValues[key]["value"]);
      }

      for(key in tabularValues){
        let itemArray = tabularValues[key].values;
        let formArray  = <FormArray>this.userFormGroup.controls[key];
        formArray.controls = [];
        for(let i=0; i<itemArray.length;i++){
          
          const control = <FormArray>this.userFormGroup.controls[key];
         
          control.push(new FormControl(itemArray[i]))
        }
      }
  }

  prev(){
    this.saveAndClearForm();
    this.currID--;
    if(this.currID <= this.pdfArr.length -1){
        this.pdfSrc = `${environment.public}${this.pdfArr[this.currID].link}`;
    }
    this.populateform(this.trainJSON["docs"][this.currID]["learn"])
  }

}
   

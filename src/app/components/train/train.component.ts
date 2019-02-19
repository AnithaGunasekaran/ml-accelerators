import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from './services/train.service';
import { environment } from '../../../environments/environment';
import { Metadata } from './models/metadata';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  selectedTemplate: string = '';
  imagePath: string = '';
  name: string;
  userForm: FormGroup;
  fields: any;
  dynamicJSON: any;
  questionFormGroup:FormGroup;
  userFormGroup:FormGroup;
  fieldKeys:any;
  items:any;

  constructor(private route:ActivatedRoute, private middleware:TrainService,private formBuilder:FormBuilder) { }

  ngOnInit() {
  
    this.selectedTemplate = "1";//this.route.snapshot.params['id'];

    this.middleware.getMetaData(this.selectedTemplate).then((data:Metadata)=>{
       console.log(data)
       this.imagePath = `${environment.public}${data.result.templates[0].preview}`;
       this.buildForm(data.result.metadata)
    })
  }

  buildForm(formData:any){
    this.fields ={
      
      "Email":{
              "type":"scalar",
      },
      "PO":{
            "type":"scalar"
      },
      "Address": {
         "type": "scalar",
      },
      "Item Date": {
         "type": "table",
      },
      "Material No.": {
          "type": "table",
      }

    }

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

  }

  addItem(name:string): void {
    const control = <FormArray>this.userFormGroup.controls[name];
  // // push the value from stepTextArea to array
    control.push(new FormControl())
  // // reset
    //this.userFormGroup.get(name).reset()
  }




  onSubmit() {
   
    console.log(this.userFormGroup.value);
    
    
 

  }
}

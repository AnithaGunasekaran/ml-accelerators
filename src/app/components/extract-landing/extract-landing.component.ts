import { Component, OnInit } from '@angular/core';
import { UsecaseService } from './services/service.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-extract-landing',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 1}))
        ])
      ]
    )
  ],
  templateUrl: './extract-landing.component.html',
  styleUrls: ['./extract-landing.component.scss']
})
export class ExtractLandingComponent implements OnInit {

  private useCases: any;
  private uploadPDFs:any;
  private uploadPDFsFormGroup:FormGroup;
  private fileToUpload: File[] = [];
  private uploadResponse = { status: '', message: '', filePath: '' };
  private error:any;
  private successMsg:string;
  private progress = 100;
  private visibleForm:boolean =false;
  private disableCtl: boolean = true;
  private templates:Object[]=[];
  private selectedTemplate:any
  private promiseArray = [];
  private finalRes =  [];
  private selUsecaseName:string = "";
  private isLoading:boolean = false;
  publicURL = environment.public;

  constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit() {
    this.getUsecases();
    this.buildForm();
  }

  close(){
    this.visibleForm = false;
  }

  showForm(usecase){
    this.visibleForm = true;
    this.resetForm();
    this.selUsecaseName = usecase.name;
    this.disableCtl = true;
    this.templates = [];
    this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
      data.templates.map((items) => {
        this.templates.push(Object.assign(items, {selected: false}));
      });
    });
  }

  public selectTemplate(template) {
    this.selectedTemplate = template;
    this.disableCtl = false;
  }

  readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };

  
  

  extract(){
    this.isLoading =  true;
    let promArray = [];
    let readProm =[]
    this.fileToUpload.map((item:any)=>{
         readProm.push(this.readUploadedFileAsText(item).then((res:any)=>{
            let file:any= {};
            file.data = res;
            file.name = item.name;
            return file;
         }));
    });

    

    Promise.all(readProm).then((res)=>{
        res.map((item:any)=>{
        
            promArray.push(this.useCaseService.postFile(item.data, item.name).then((res)=>{
                 let result:any = {};
                 result.template_name= this.selectedTemplate.name;
                 result.json = res;
                 result.file_name = item.name;
                 result.status = `Completed`; 
                 return result;
            }))
        });
        Promise.all(promArray).then((res)=>{
          console.log("Final", res)
          console.log(res.length, readProm.length)
          this.useCaseService.storeExtractedData(res);
          this.route.navigate(['extract'])
        })
    });
  }

  handleFileInput(e, i) {
    console.log(e, i)
    let files = e.target.files;
    this.fileToUpload[i] = files.item(0);
    console.log(this.fileToUpload)
  }
  buildForm(){
    const fields = {};
    fields['file'] = new FormArray([]);
    this.uploadPDFsFormGroup = this.formBuilder.group(fields);
    this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  }

  addItem(name:string): void {
    let absCtl = <FormArray>this.uploadPDFsFormGroup.controls[name];
    if(absCtl.length< 5){
      const control = <FormArray>this.uploadPDFsFormGroup.controls[name];
      control.push(new FormControl())
    }
    else{
      alert("You cannot add more than 5 files")
    }
  }

  resetForm():void{
    const fields = {};
    fields['file'] = new FormArray([]);
    this.uploadPDFsFormGroup = this.formBuilder.group(fields);
    this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  }

  private getUsecases() {
 
    this.useCaseService.fetchUsecases().then((data) => {
      if (data) {
        this.useCases = data[0]['usecases'];
      }
    },
    error => {
     
    });
  }
 

}

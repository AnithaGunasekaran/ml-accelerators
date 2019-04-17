import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UsecaseService } from './services/service.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import { HeaderService } from '../header/services/header.service';
 


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
  styleUrls: ['./extract-landing.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class ExtractLandingComponent  implements OnInit{

   private useCases: any =[];
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
  private lastCtl:boolean = true;
  private promiseArray = [];
  private finalRes =  [];
  private selUsecaseName:string = "";
  private isLoading:boolean = false;
  private expand: boolean = false;
  private state:string = '';
  private isExtracting:boolean = false;
  private selectedUsecase: any  =[];
  private isOpen = true;

  public filesDrag: UploadFile[] = [];

  publicURL = environment.public;

  show = false;

   constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder, private route:Router, private headerSerivce: HeaderService) { }

  ngOnInit() {
    this.headerSerivce.storeCurrentNavigatedUrl(this.route.url);
    this.getUsecases();
    this.buildForm();
  }


  get stateName() {
    return this.show ? 'open' : 'closed'
  }


  toggle() {
    this.show = !this.show;
    this.selectedUsecase.length = 0;
    this.useCases.map((item)=>{
      item.selected = false;
    })
 
  }

  public dropped(event: UploadEvent) {
    this.filesDrag = event.files;
    if(this.filesDrag.length >= 6){
      alert("You cannot select select more than 5 file(s)")
    }
    console.log(this.filesDrag)
  }
      

  showForm(usecase){
    this.isLoading = true;
    usecase.selected = !usecase.selected;
    this.selectedUsecase = Object.values(this.useCases).filter((value:any) => value.selected === true);
    if(!usecase.selected){
      this.visibleForm = false;
      this.isLoading = false;
    }
    else{
      this.templates = [];
      this.useCaseService.fetchTemplates(usecase.use_case_id).then((data:any) => {
        data.templates.map((items) => {
          this.templates.push(Object.assign(items, {selected: false}));
        });
      }).catch((err)=>{
        alert(`Unable to fetch templates for matching usecase - ${this.selUsecaseName}`)
      }).finally(()=>{
         this.isLoading = false;
         this.visibleForm = true;
      })
    
    }
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

  private fileOver(event){
    console.log(this.filesDrag)
    if(this.filesDrag.length >= 6){
      alert("Please select less than 5 file(s)")
    }
  }

  
  extractMulti(){

    this.isExtracting =  true;

    let uploadArr = [];
  
    this.fileToUpload.map((item:any)=>{
      let formData = new FormData();
      formData.append('file', item, item.name)
      // formData.append('use_case_id', this.selectedUsecase[0].use_case_id);
      // formData.append('template',this.selectedTemplate.name);
      let failedPromises= [];
      uploadArr.push(this.useCaseService.postFileMultiPart(formData,this.selectedTemplate.name,this.selectedUsecase[0].use_case_id).then((res)=>{
        console.log(res)
        let result:any = {};
        result.template_name= this.selectedTemplate.name;
        result.file_name = item.name.split('.').slice(0, -1).join('.');
        if(res.status === 200){
          
          result.status = `Completed`; 
          result.json = res.body;
        }
        else{
          result.status = `Unable to fetch data`;
          result.json = '';
        }
        return result;
      }).catch((err)=>{
        console.log(err)
        failedPromises.push(err)
      }).finally(()=>{
        this.isExtracting = false
      }))
    });
    Promise.all(uploadArr).then((res)=>{
     
      this.useCaseService.storeExtractedData(res, this.selectedUsecase);
      this.route.navigate(['extract'])
      this.isExtracting =  false;
     
    });
  }

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
            promArray.push(this.useCaseService.postFile(item.data, item.name).then((res:any)=>{
              let result:any = {};
              if(res.status === 200){
                result.template_name= this.selectedTemplate.name;
                result.file_name = item.name.split('.').slice(0, -1).join('.');//item.name;
                if(res.body === "Success"){
                  result.status = `Completed`;
                  result.json = res;
                }
                else{
                  result.status = `Unable to fetch data`;
                  result.json = '';
                }
              }
                return result;
            }).catch((err)=>{
                let result:any = {};
                result.template_name= this.selectedTemplate.name;
                result.file_name = item.name.split('.').slice(0, -1).join('.');;
                result.status = `Unable to fetch data`; 
                result.json = '';
                return result;
            }))
        });
        Promise.all(promArray).then((res)=>{
          console.log("Final", res)
          console.log(res.length, readProm.length)
          this.useCaseService.storeExtractedData(res, this.selectedUsecase);
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

  removeItem(name:string,i:number){
    const control = <FormArray>this.uploadPDFsFormGroup.controls['file'];
    this.fileToUpload.splice(i,1)
    control.removeAt(i)
  }

  resetForm():void{
    const fields = {};
    fields['file'] = new FormArray([]);
    this.uploadPDFsFormGroup = this.formBuilder.group(fields);
    this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  }

   close(){
    this.visibleForm = false;
    this.useCases.map((item:any)=>{
      item.selected = false;
    }) 
    this.selectedUsecase = [];
  }

  private getUsecases() {
    this.isLoading = true;
    this.useCaseService.fetchUsecases().then((data) => {
      if (data) {
        console.log(data)
        let usecases = data;
        for (var property in data) {
          console.log(property, data[property]);
          this.useCases.push(Object.assign(data[property], { use_case_id: property}, {selected: false}));
        }
      }
    }).catch((err)=>{
        alert("Unable to fetch usecases");
        
    }).finally(()=>{
      this.isLoading = false;
    })
  }
}
 



import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UsecaseService } from './services/service.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {style, state, animate, transition, trigger} from '@angular/animations';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import { AlertPromise } from 'selenium-webdriver';
 


@Component({
  selector: 'app-extract-landing',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '45%',
        overflow: 'scroll',
        transform: 'translateY(-100%)',
        opacity: 1
      })),
      state('closed', style({
        height: '5%',
        overflow: 'hidden',
        transform: 'translateY(100%)',
        opacity: 1
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
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
  private visibleForm:boolean =true;
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
  private selectedUsecase: any  =[];
  private isOpen = true;

  public filesDrag: UploadFile[] = [];

  publicURL = environment.public;

  show = false;

   constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit() {
    this.getUsecases();
    this.buildForm();
  }


  get stateName() {
    return this.show ? 'open' : 'closed'
  }


  toggle() {
    if(this.selectedUsecase.length === 0){
       alert('Please select a usecase to proceed')
    }
    else{
     this.show = !this.show;
    }
  }

  public dropped(event: UploadEvent) {
    this.filesDrag = event.files;
    if(this.filesDrag.length >= 6){
      alert("You cannot select select more than 5 file(s)")
    }
    console.log(this.filesDrag)
  }
      

  showForm(usecase){
  
    usecase.selected = !usecase.selected;
    
    this.selectedUsecase = Object.values(this.useCases).filter((value:any) => value.selected === true);
   
    this.visibleForm = true; 
    this.templates = [];
    this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
      data.templates.map((items) => {
        this.templates.push(Object.assign(items, {selected: false}));
      });
    });
 
    this.show = !this.show;
 
    if(this.selectedUsecase.length === 0){
      this.show = false;
    }
    if(!usecase.selected){
      this.visibleForm = false;
    }
    // this.state = 'done';
    // this.useCases.map((item)=>{
    //     item.selected = false;
    // })
    // this.resetForm();
    // usecase.selected = true;
    // this.selUsecaseName = usecase.name;
    // this.disableCtl = true;
    // this.templates = [];
    // this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
    //   data.templates.map((items) => {
    //     this.templates.push(Object.assign(items, {selected: false}));
    //   });
    // });
    // console.log(usecase)
    // this.useCases = [];
    //this.useCases[0] = usecase;
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
    console.log(this.filesDrag)
    this.isLoading =  true;
    let uploadArr = [];
    this.filesDrag.map((item:any)=>{
      let formData = new FormData();
      const fileEntry = item.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        formData.append('fileKey',file, item.relativePath);
        this.useCaseService.postFileMultiPart(formData).then((res)=>{

        });
      });
      console.log(item.fileEntry)
      // console.log("Item", item)
       
      // formData.append('usecase', this.selectedUsecase[0].name);
      // formData.append('template',this.selectedTemplate.name)
      uploadArr.push(this.useCaseService.postFileMultiPart(formData).then((res)=>{
        let result:any = {};
        result.template_name= this.selectedTemplate.name;
        result.file_name = item.name;
        result.status = `Completed`; 
        if(res !== `Error`){
          result.json = res;
        }
        else{
          result.status = `Unable to fetch data`;
          result.json = '';
        }
        return result;
      }))
    });
    Promise.all(uploadArr).then((res)=>{
      console.log("All",res)
      this.useCaseService.storeExtractedData(res);
      this.route.navigate(['extract'])
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
            promArray.push(this.useCaseService.postFile(item.data, item.name).then((res)=>{
                console.log(res)
                let result:any = {};
                result.template_name= this.selectedTemplate.name;
                result.file_name = item.name;
                result.status = `Completed`; 
                if(res !== `Error`){
                  result.json = res;
                }
                else{
                  result.status = `Unable to fetch data`;
                  result.json = '';
                }
                return result;
            }).catch((err)=>{
                let result:any = {};
                result.template_name= this.selectedTemplate.name;
                result.file_name = item.name;
                result.status = `Unable to fetch data`; 
                result.json = '';
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

  removeItem(name:string,i:number){
    const control = <FormArray>this.uploadPDFsFormGroup.controls['file'];
    control.removeAt(i)
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
        let usecases = data[0]['usecases'];
        usecases.map((item)=>{
          this.useCases.push(Object.assign(item, {selected: false}));
        })
        console.log(this.useCases)
      }
    },
    error => {
     
    });
  }

}

  // private useCases: any =[];
  // private uploadPDFs:any;
  // private uploadPDFsFormGroup:FormGroup;
  // private fileToUpload: File[] = [];
  // private uploadResponse = { status: '', message: '', filePath: '' };
  // private error:any;
  // private successMsg:string;
  // private progress = 100;
  // private visibleForm:boolean =true;
  // private disableCtl: boolean = true;
  // private templates:Object[]=[];
  // private selectedTemplate:any
  // private lastCtl:boolean = true;
  // private promiseArray = [];
  // private finalRes =  [];
  // private selUsecaseName:string = "";
  // private isLoading:boolean = false;
  // private expand: boolean = false;
  // private state:string = '';
  // private selectedUsecase: any  =[];
  // private isOpen = true;

  // publicURL = environment.public;

  // constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder, private route:Router) { }

  // ngOnInit() {
  //   this.getUsecases();
  //   this.buildForm();
  // }

  // close(){
  //   this.expand = !this.expand;
  //   //this.visibleForm = false;
  // }

  // showForm(usecase){
  
  //   usecase.selected = !usecase.selected;
  //   this.isOpen = !this.isOpen;
  //   this.selectedUsecase = Object.values(this.useCases).filter((value:any) => value.selected === true);
   
  //   this.visibleForm = true; 
  //   this.templates = [];
  //   this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
  //     data.templates.map((items) => {
  //       this.templates.push(Object.assign(items, {selected: false}));
  //     });
  //   });
  //   console.log("isOPne", this.isOpen)
   
  //   if(!usecase.selected){
  //    // this.visibleForm = false;
  //   }
  //   // this.state = 'done';
  //   // this.useCases.map((item)=>{
  //   //     item.selected = false;
  //   // })
  //   // this.resetForm();
  //   // usecase.selected = true;
  //   // this.selUsecaseName = usecase.name;
  //   // this.disableCtl = true;
  //   // this.templates = [];
  //   // this.useCaseService.fetchTemplates(usecase.name.toLowerCase()).then((data:any) => {
  //   //   data.templates.map((items) => {
  //   //     this.templates.push(Object.assign(items, {selected: false}));
  //   //   });
  //   // });
  //   // console.log(usecase)
  //   // this.useCases = [];
  //   //this.useCases[0] = usecase;
  // }

  // public selectTemplate(template) {
  //   this.selectedTemplate = template;
  //   this.disableCtl = false;
  // }

  // readUploadedFileAsText = (inputFile) => {
  //   const temporaryFileReader = new FileReader();
  //   return new Promise((resolve, reject) => {
  //     temporaryFileReader.onerror = () => {
  //       temporaryFileReader.abort();
  //       reject(new DOMException("Problem parsing input file."));
  //     };
  //     temporaryFileReader.onload = () => {
  //       resolve(temporaryFileReader.result);
  //     };
  //     temporaryFileReader.readAsDataURL(inputFile);
  //   });
  // };

  
  // extractMulti(){
  //   this.isLoading =  true;
  //   let uploadArr = [];
  //   this.fileToUpload.map((item:any)=>{
  //     let formData = new FormData();
  //     console.log("Item", item)
  //     formData.append('fileKey', item, item.name);
  //     formData.append('usecase', this.selectedUsecase[0].name);
  //     formData.append('template',this.selectedTemplate.name)
  //     uploadArr.push(this.useCaseService.postFileMultiPart(formData).then((res)=>{
  //       let result:any = {};
  //       result.template_name= this.selectedTemplate.name;
  //       result.file_name = item.name;
  //       result.status = `Completed`; 
  //       if(res !== `Error`){
  //         result.json = res;
  //       }
  //       else{
  //         result.status = `Unable to fetch data`;
  //         result.json = '';
  //       }
  //       return result;
  //     }))
  //   });
  //   Promise.all(uploadArr).then((res)=>{
  //     console.log("All",res)
  //     this.useCaseService.storeExtractedData(res);
  //     this.route.navigate(['extract'])
  //   });
  // }

  // extract(){
  //   this.isLoading =  true;
  //   let promArray = [];
  //   let readProm =[]
  //   this.fileToUpload.map((item:any)=>{
  //        readProm.push(this.readUploadedFileAsText(item).then((res:any)=>{
  //           let file:any= {};
  //           file.data = res;
  //           file.name = item.name;
  //           return file;
  //        }));
  //   });

  //   Promise.all(readProm).then((res)=>{
  //       res.map((item:any)=>{
  //           promArray.push(this.useCaseService.postFile(item.data, item.name).then((res)=>{
  //               console.log(res)
  //               let result:any = {};
  //               result.template_name= this.selectedTemplate.name;
  //               result.file_name = item.name;
  //               result.status = `Completed`; 
  //               if(res !== `Error`){
  //                 result.json = res;
  //               }
  //               else{
  //                 result.status = `Unable to fetch data`;
  //                 result.json = '';
  //               }
  //               return result;
  //           }).catch((err)=>{
  //               let result:any = {};
  //               result.template_name= this.selectedTemplate.name;
  //               result.file_name = item.name;
  //               result.status = `Unable to fetch data`; 
  //               result.json = '';
  //               return result;
  //           }))
  //       });
  //       Promise.all(promArray).then((res)=>{
  //         console.log("Final", res)
  //         console.log(res.length, readProm.length)
  //         this.useCaseService.storeExtractedData(res);
  //         this.route.navigate(['extract'])
  //       })
  //   });
  // }

  // handleFileInput(e, i) {
  //   console.log(e, i)
  //   let files = e.target.files;
  //   this.fileToUpload[i] = files.item(0);
  //   console.log(this.fileToUpload)
  // }
  // buildForm(){
  //   const fields = {};
  //   fields['file'] = new FormArray([]);
  //   this.uploadPDFsFormGroup = this.formBuilder.group(fields);
  //   this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  // }

  // addItem(name:string): void {
  //   let absCtl = <FormArray>this.uploadPDFsFormGroup.controls[name];
  //   if(absCtl.length< 5){
  //     const control = <FormArray>this.uploadPDFsFormGroup.controls[name];
  //     control.push(new FormControl())
  //   }
  //   else{
  //     alert("You cannot add more than 5 files")
  //   }
   
  // }

  // removeItem(name:string,i:number){
  //   const control = <FormArray>this.uploadPDFsFormGroup.controls['file'];
  //   control.removeAt(i)
  // }

  // resetForm():void{
  //   const fields = {};
  //   fields['file'] = new FormArray([]);
  //   this.uploadPDFsFormGroup = this.formBuilder.group(fields);
  //   this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  // }

  // private getUsecases() {
 
  //   this.useCaseService.fetchUsecases().then((data) => {
  //     if (data) {
  //       let usecases = data[0]['usecases'];
  //       usecases.map((item)=>{
  //         this.useCases.push(Object.assign(item, {selected: false}));
  //       })
  //       console.log(this.useCases)
  //     }
  //   },
  //   error => {
     
  //   });
  // }
 



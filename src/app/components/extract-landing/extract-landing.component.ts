import { Component, OnInit } from '@angular/core';
import { UsecaseService } from './services/service.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-extract-landing',
  templateUrl: './extract-landing.component.html',
  styleUrls: ['./extract-landing.component.scss']
})
export class ExtractLandingComponent implements OnInit {

  private useCases: any;
  private uploadPDFs:any;
  private uploadPDFsFormGroup:FormGroup;
  private fileToUpload: File = null;
  private uploadResponse = { status: '', message: '', filePath: '' };
  private error:any;
  private successMsg:string;
  private progress = 100;
  publicURL = environment.public;

  constructor(private useCaseService:UsecaseService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getUsecases();
    this.buildForm();
    
  }

  uploadFile(){
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);

    reader.onload = () =>{
      this.useCaseService.postFile(reader.result, this.fileToUpload.name).subscribe(
        (res) => {
          if(res.message === 100){
            this.successMsg = "File uploaded successfully!"
          }
          this.uploadResponse = res
        },
        (err) => {
          this.error = err
        }
      );
    }
    
  }
  handleFileInput(files: FileList) {
    console.log(files)
    this.fileToUpload = files.item(0);
  }
  buildForm(){
    const fields = {};
    fields['file'] = new FormArray([]);
    this.uploadPDFsFormGroup = this.formBuilder.group(fields);
    this.uploadPDFsFormGroup.setControl('file', this.formBuilder.array(['']))
  }

  addItem(name:string): void {
    const control = <FormArray>this.uploadPDFsFormGroup.controls[name];
    control.push(new FormControl())
  }

  private getUsecases() {
 
    this.useCaseService.fetchUsecases().then((data) => {
      if (data) {
        console.log(data[0]['usecases'])
        this.useCases = data[0]['usecases'];
      }
    },
    error => {
     
    });
  }
 

}

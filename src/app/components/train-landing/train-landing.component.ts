import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TrainLandingService } from './services/train-landing.service';
import { ModalComponent } from '../home/modal/modal.component';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderService } from '../header/services/header.service';

@Component({
  selector: 'app-train-landing',
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
  templateUrl: './train-landing.component.html',
  styleUrls: ['./train-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrainLandingComponent implements OnInit {

  public usecases = [];
  public isAnyUsecaseSelected = false;
  public errorMessage = '';
  public publicURL = environment.public;
  public templates = [];
  public untrainedTemplates = [];
  public trainedTemplates = [];
  public isAllTemplateSelected = false;
  public selectedTemplates = [];
  public isAnyTemplateSelected = false;
  public selectedUsecaseName = '';
  private usecaseid = '';
  private isLoading = true;
  @ViewChild(ModalComponent) private modal;

  constructor(private router: Router, private trainLandingservice: TrainLandingService, private headerSerivce: HeaderService) { }

  ngOnInit() {
    this.isLoading = true;
    this.headerSerivce.storeCurrentNavigatedUrl(this.router.url);
    this.getUsecasesData();
    
  }

  public getUsecasesData() {
   
    this.trainLandingservice.getUsecases().subscribe((data) => {
      if (data) {
        for (let property in data) {
          this.usecases.push(Object.assign(data[property], { use_case_id: property}, {selected: false}));
        }
      }
      this.isLoading = false;
    },
    error => {
      alert('Unable to retrieve the usecases. Please try again later...');
      this.isLoading = false;
    });
   
  }

  public getTemplatesData(usecaseId: string) {
    this.isLoading = true;
    this.trainLandingservice.getTemplates(usecaseId).subscribe((data) => {
      if (data) {
        this.templates = data['templates'];
        this.trainedTemplates = this.templates.filter((value) => value.is_trained === 1);
        this.untrainedTemplates = this.templates.filter((value) => value.is_trained === 0);
      }
      this.isLoading = false;
    },
    error => {
     this.errorMessage = 'Unable to retrieve the templates. Please try again later...';
     this.isLoading = false;
    });
   
  }

  public selectUsecase(usecase) {
    this.errorMessage = '';
    if (usecase.selected) {
      this.selectedUsecaseName = '';
      this.usecases.forEach(data => data.selected = false);
      this.isAnyUsecaseSelected = false;
      this.templates = [];
    } else {
      this.usecases.forEach(data => data.selected = false);
      usecase.selected = true;
      this.isAnyUsecaseSelected = true;
      this.selectedUsecaseName = usecase.name;
      this.usecaseid = usecase.use_case_id;
      this.getTemplatesData(usecase.use_case_id);
    }
  }

  public selectTemplate(template) {
    if (template.selected) {
      this.templates.forEach(data => data.selected = false);
      this.isAnyTemplateSelected = false;
    } else {
      this.templates.forEach(data => data.selected = false);
      template.selected = true;
      this.isAnyTemplateSelected = true;
    }
  }

  public showTemplatePreview(template) {
    if (template !== null) {
      this.modal.previewedTemplate.name = template.name;
      this.modal.previewedTemplate.image = this.publicURL + template.image;
      this.modal.display = true;
    }
  }

  public navigate(page: string) {
    this.selectedTemplates = this.templates.filter((data => data.selected === true));
    this.trainLandingservice.storeSelectedTemplate(this.selectedTemplates, this.usecaseid);
    this.router.navigate([page]);
  }

  public close() {
    this.isAnyUsecaseSelected = false;
    this.usecases.forEach(data => data.selected = false);
    this.templates = [];
  }
}

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './services/home.service';
import { ModalComponent } from './modal/modal.component';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  public templates = [];
  public isAllTemplateSelected = true;
  public checkboxLabel = 'Unselect all';
  errorMessage: string = '';
  publicURL = environment.public;
  isLoading: boolean = false;
  selectedTemplates: any[] = [];
  @ViewChild(ModalComponent) private modal;

  constructor(private homeService: HomeService, private router: Router, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.getTemplateData();
  }

  private getTemplateData() {
    this.isLoading = true;
    this.homeService.getTemplateData(environment.usecaseId).then((data) => {
      if (data) {
        this.templates = data['templates'];
        this.checkAllTemplateSelectedOrNot();
        this.selectedTemplates = this.templates;
        this.isLoading = false;
      }
    },
    error => {
     this.errorMessage = "Unable to retrieve the templates. Please try again later...";
     this.isLoading = false;
    });
  }
 

  public showTemplatePreview(template) {
    if(template !== null){
      this.modal.previewedTemplate.name = template.name;
      this.modal.previewedTemplate.image = "http://18.221.24.240/data/usecase1/Rexel_Sweden/image.png"
      this.modal.display = true;
    }
  }

  public selectTemplate(template) {
    template.selected = !template.selected;
    this.isAllTemplateSelected = this.templates.every(data => data.selected === true) ? true : false;
    this.selectedTemplates = Object.values(this.templates).filter((value) => value.selected === true);
  }

  public navigate(page:string) {
    this.selectedTemplates = this.templates.filter((data => data.selected === true));
    if(page === "train"){
        this.homeService.storeSelectedTemplate(this.selectedTemplates);
        this.router.navigate([page]);
    }
    this.homeService.storeSelectedTemplates(this.selectedTemplates);
    this.router.navigate([page]);
  }

  public checkAllTemplateSelectedOrNot() {
    if (this.isAllTemplateSelected) {
      this.selectedTemplates = this.templates;
      this.templates.forEach(data => data.selected = true);
    } else {
      this.selectedTemplates = [];
      this.templates.forEach(data => data.selected = false);
    }
  }

}

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './services/home.service';
import { ModalComponent } from './modal/modal.component';


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
  selectedTemplates: any[] = [];
  @ViewChild(ModalComponent) private modal;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getTemplateData();
  }

  private getTemplateData() {
    this.homeService.getTemplateData().subscribe((data) => {
      if (data) {
        this.templates = data['templates'];
        this.checkAllTemplateSelectedOrNot();
        this.selectedTemplates = this.templates;
  
      }
    },
    error => {
     this.errorMessage = "Unable to retrieve the templates. Please try again later...";
     //Log error to a file
    });
    // this.templates = this.homeService.getTeplateData();
  }

  public showTemplatePreview(template) {
    if(template !== null){
      this.modal.previewedTemplate = template;
      this.modal.display = true;
    }
    else{
      //Log error to a file
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
    //[{"id":2,"name":"Template 2","image":"assets/previews/2.jpg","file":"assets/pdfs/2.pdf","desc":"Praesent eleifend eleifend ante at feugiat."}];
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

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
  @ViewChild(ModalComponent) private modal;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getTemplateData();
  }

  private getTemplateData() {
    this.homeService.getTeplateData().subscribe((data) => {
      if (data) {
        this.templates = data['templates'];
        this.checkAllTemplateSelectedOrNot();
      }
    });
    // this.templates = this.homeService.getTeplateData();
  }

  public showTemplatePreview(template) {
    this.modal.previewedTemplate = template;
    this.modal.display = true;
  }

  public selectTemplate(template) {
    template.selected = !template.selected;
    this.isAllTemplateSelected = this.templates.every(data => data.selected === true) ? true : false;
  }

  public navigateToExtract() {
    let selectedTemplates = this.templates.filter((data => data.selected === true));
    this.homeService.storeSelectedTemplates(selectedTemplates);
    this.router.navigate(['extract']);
  }

  public checkAllTemplateSelectedOrNot() {
    if (this.isAllTemplateSelected) {
      this.checkboxLabel = 'Unselect all';
      this.templates.forEach(data => data.selected = true);
    } else {
      this.checkboxLabel = 'Select all';
      this.templates.forEach(data => data.selected = false);
    }
  }

}

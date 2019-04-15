import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private endPoint = environment.apiEndPoint;
  private selectedTemplates = new BehaviorSubject([]);
  private selectedTemplate = new BehaviorSubject([]);
  public currentSelectedTemplates = this.selectedTemplates.asObservable();
  public currentSelectedTemplate = this.selectedTemplate.asObservable();


  constructor(private httpClient: HttpClient) {
  }

  // public getTemplateData(usecaseId: string) {
    
  //   let params = {'use_case_id': usecaseId};
  //   return this.httpClient.get(`${this.endPoint}/getTemplates`, {params: params}).toPromise()
  //   .then(res => res)
  //   .then(data => { return data; });
  // }

  // public getImage(usecaseId: string, templateName: string) {
  //   let params = { "use_case_id" : usecaseId, 'template_name': templateName}
  //   return this.httpClient.get(`${this.endPoint}/getImage`, {params: params,  responseType: "blob"}).toPromise()
  //   .then(res => res)
  //   .then(data => { return data; });
  // }

  // public storeSelectedTemplates(templates) {
  //   this.selectedTemplates.next(templates);
  // }

  // public storeSelectedTemplate(template) {
  //   this.selectedTemplate.next(template)
  // }

}

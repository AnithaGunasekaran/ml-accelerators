import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainLandingService {

  private endPoint = environment.apiEndPoint;
  private selectedTemplate = new BehaviorSubject({});
  public currentSelectedTemplate = this.selectedTemplate.asObservable();

  

  constructor(private httpClient: HttpClient) { }

  public getUsecases() {
    //return this.httpClient.get('');
    return this.httpClient.get(`${this.endPoint}/getUsecases`);
  }

  public getTemplates(usecaseId: string) {
    const params = { 'use_case_id': usecaseId };
    return this.httpClient.get(`${this.endPoint}/getTemplatesForTrain`, { params: params });
  }

  public storeSelectedTemplate(template, usecaseId) {
    this.selectedTemplate.next({template, usecaseId})
  }
}

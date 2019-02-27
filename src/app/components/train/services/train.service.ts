import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Metadata } from '../models/metadata';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  apiEndPoint = environment.apiEndPoint;

  constructor(private httpClient:HttpClient) { }

  getMetaData(usecaseId:string, templateName:string){
    let params = {'use_case_id': usecaseId, 'template_name': templateName}
    return this.httpClient.get(`${this.apiEndPoint}/getMetaData`, {params:params}).toPromise()
      .then(res => <Metadata>res)
      .then(data => {  return data; });
  }

  getTrainingPdfs(usecaseId:string,templateName:string){
    let params = {'use_case_id': usecaseId, 'template_name': templateName}
    return this.httpClient.get(`${this.apiEndPoint}/getTrainPdfs`, {params:params}).toPromise()
      .then(res => res)
      .then(data => {  return data; });
  }


  postTrainModel(usecaseId:string, templateName:string, json:string){
    let params = {'use_case_id': usecaseId, 'template_name': templateName};
    return this.httpClient.post(`${this.apiEndPoint}/train`, json, {params: params}).toPromise()
    .then(res => res)
    .then(data => {  return data; });
  }

  getAutoPopulate(usecaseId:string, templateName:string){
    let params = {'use_case_id': usecaseId, 'template_name': templateName}
    return this.httpClient.get(`${this.apiEndPoint}/getDefaultData`, {params: params}).toPromise()
    .then(res => res)
    .then(data => {  return data; });

  }

}

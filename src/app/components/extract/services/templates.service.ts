import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documents } from '../models/documents';
import { JSONResponse } from '../models/json';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

   apiEndPoint = environment.apiEndPoint;

  constructor(private httpClient:HttpClient) {}

   public fetchTemplates(){
      return this.httpClient.get(`${this.apiEndPoint}/templates`);
   }

   public fetchFiles(usecaseId:string, templateName:string){
      let params:any = {'use_case_id': usecaseId, 'template_name': templateName}
      return this.httpClient.get(`${this.apiEndPoint}/getTemplates`, {params: params}).toPromise()
      .then(res =><Documents[]> res )
      .then(data => {  return data; });
   }

   public extractJSON(usecaseId:string,templateName:string,pdfName:string){
      let params:any = {'use_case_id': usecaseId, 'template_name': templateName, 'pdf_name': pdfName}
      return this.httpClient.get(`${this.apiEndPoint}/extractData`, {params: params}).toPromise()
      .then(res => <JSONResponse> res)
      .then(data => {  return data; });
   }
  
   public fetchPDF(usecaseId:string, templateName:string, pdfName: string){
      let params = { "use_case_id" : usecaseId, 'template_name': templateName, 'pdf_name': pdfName}
      return this.httpClient.get(`${this.apiEndPoint}/getPdf`, {params: params,  responseType: "blob"}).toPromise()
      .then(res => res)
      .then(data => { return data; });
   }
}

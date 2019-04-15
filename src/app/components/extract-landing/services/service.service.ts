import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from  'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsecaseService {

  private endPoint = environment.apiEndPoint;
  private extractedData = new BehaviorSubject([]);
  public currentExtractedData = this.extractedData.asObservable();

  constructor(private httpClient:HttpClient) {}

   public fetchUsecases(){
    return this.httpClient.get(`${this.endPoint}/getUsecases`).toPromise()
    .then(res => res)
    .then(data => { return data; });
   }

   public fetchTemplates(id:string){
    return this.httpClient.get(`${this.endPoint}/getTemplatesForExtract?use_case_id=${id}`).toPromise()
    .then(res => res)
    .then(data => { return data; });
   }

 
  public storeExtractedData(templates) {
    this.extractedData.next(templates);
  }

   postFile(data:any, name:string){
    return this.httpClient.post(`${this.endPoint}/postPDF`, { 'fileBase64': data, "fileName": name},).toPromise()
    .then(res => res)
    .then(data => { return data; });
  }

  postFileMultiPart(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/x-www-form-urlencoded');
    return this.httpClient.post(`http://localhost:5005/profile`,formData, {headers: headers}).toPromise()
    .then(res => res)
    .then(data => { return data; });
  }
   
}

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
  private useCaseExtract = new BehaviorSubject({});
  public currentExtractedData = this.extractedData.asObservable();
  public currentSelectedUsecase = this.useCaseExtract.asObservable();

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

 
  public storeExtractedData(templates,usecase) {
    this.extractedData.next(templates);
    this.useCaseExtract.next(usecase[0])
  }

   postFile(data:any, name:string){
    return this.httpClient.post(`${this.endPoint}/postPDF`, { 'fileBase64': data, "fileName": name},).toPromise()
    .then(res => res)
    .then(data => { return data; });
  }

  postFileMultiPart(formData:FormData, template_name:string, use_case_id:string){
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Accept', 'application/x-www-form-urlencoded');
    headers.append('Content-type', 'multipart/form-data');
    headers.append('Accept','Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3')
    return this.httpClient.post(`https://54.85.63.69/api/v1/extractUpload?use_case_id=${use_case_id}&template_name=${template_name}`, formData, {observe: 'response'}).toPromise()
    .then(res => res)
    .then(data => { return data; });
  }
   
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documents } from '../models/documents';
import { JSONResponse } from '../models/json';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

   apiEndPoint = 'http://localhost:5000/api';

  constructor(private httpClient:HttpClient) {}

   public fetchTemplates(){
      return this.httpClient.get(`${this.apiEndPoint}/templates`);
   }

   public fetchFiles(clientId:string){
      return this.httpClient.get(`${this.apiEndPoint}/templates/${clientId}`).toPromise()
      .then(res =><Documents[]> res )
      .then(data => {  return data; });
   }

   public extractJSON(id:string){
      return this.httpClient.get(`${this.apiEndPoint}/documents/${id}`).toPromise()
      .then(res => <JSONResponse> res)
      .then(data => {  return data; });
   }
}

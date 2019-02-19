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

  getMetaData(id:string){
    return this.httpClient.get(`${this.apiEndPoint}/template/${id}`).toPromise()
      .then(res => <Metadata>res)
      .then(data => {  return data; });
  }

}

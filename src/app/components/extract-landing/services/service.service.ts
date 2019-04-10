import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsecaseService {

  private endPoint = environment.apiEndPoint;

  constructor(private httpClient:HttpClient) {}

   public fetchUsecases(){
    return this.httpClient.get(`${this.endPoint}/getTrainedUsecases`).toPromise()
    .then(res => res)
    .then(data => { return data; });
   }

 

   postFile(data:any, name:string){
      console.log(data, name)
  

      return this.httpClient.post<any>(`${this.endPoint}/postPDF`, { 'fileBase64': data, "fileName": name}, {
        reportProgress: true,
        observe: 'events'
      }).pipe(map((event) => {
     
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round(100 * event.loaded / event.total);
              return { status: 'progress', message: progress };
            case HttpEventType.Response:
              console.log("Events", event);
              return event.body;
            default:
              return `Unhandled event: ${event.type}`;
          }
        })
      );
  }
   
}

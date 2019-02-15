import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private endPoint = 'https://ml-endpointv1.firebaseapp.com/api/templates';

  // public templates = [
  //   { 'id': 1, 'name': 'Template 1', 'image': 'assets/previews/one.jpg', 'file': 'assets/pdfs/1.pdf', 'desc': 'dummy text' },
  //   { 'id': 2, 'name': 'Template 2', 'image': 'assets/previews/two.jpg', 'file': 'assets/pdfs/2.pdf', 'desc': 'dummy text' },
  //   { 'id': 3, 'name': 'Template 3', 'image': 'assets/previews/three.jpg', 'file': 'assets/pdfs/3.pdf', 'desc': 'dummy text' },
  //   { 'id': 4, 'name': 'Template 4', 'image': 'assets/previews/four.jpg', 'file': 'assets/pdfs/4.pdf', 'desc': 'dummy text' },
  //   { 'id': 5, 'name': 'Template 5', 'image': 'assets/previews/five.jpg', 'file': 'assets/pdfs/5.pdf', 'desc': 'dummy text' },
  //   { 'id': 6, 'name': 'Template 6', 'image': 'assets/previews/six.jpg', 'file': 'assets/pdfs/6.pdf', 'desc': 'dummy text' },
  //   { 'id': 7, 'name': 'Template 7', 'image': 'assets/previews/seven.jpg', 'file': 'assets/pdfs/7.pdf', 'desc': 'dummy text' },
  //   { 'id': 8, 'name': 'Template 8', 'image': 'assets/previews/eight.jpg', 'file': 'assets/pdfs/8.pdf', 'desc': 'dummy text' },
  //   { 'id': 9, 'name': 'Template 9', 'image': 'assets/previews/nine.jpg', 'file': 'assets/pdfs/9.pdf', 'desc': 'dummy text' }
  // ];

  private selectedTemplates = new BehaviorSubject([]);
  public currentSelectedTemplates = this.selectedTemplates.asObservable();


  constructor(private httpClient: HttpClient) {
  }

  public getTeplateData() {
    // return this.templates;
    return this.httpClient.get(this.endPoint);
  }

  public storeSelectedTemplates(templates) {
    this.selectedTemplates.next(templates);
  }

}

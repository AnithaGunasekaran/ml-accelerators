import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public navigatedUrl = new BehaviorSubject('');

  constructor() { }

  public storeCurrentNavigatedUrl(url) {
    this.navigatedUrl.next(url);
  }
}

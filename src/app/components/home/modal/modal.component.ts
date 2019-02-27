import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  display = false;
  previewedTemplate:any = {};
  imageH : number = 0;
  constructor() { 
    console.log(this.previewedTemplate)
  }

  ngOnInit() {
    
    this.imageH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}

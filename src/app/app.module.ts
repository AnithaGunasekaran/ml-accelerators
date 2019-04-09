import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExtractComponent } from './components/extract/extract.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PdfViewerComponent } from './components/home/pdf-viewer/pdf-viewer.component';
import { ModalComponent } from './components/home/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import {DialogModule} from 'primeng/dialog';
import {LightboxModule} from 'primeng/lightbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TrainComponent } from './components/train/train.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtractComponent,
    PageNotFoundComponent,
    PdfViewerComponent,
    ModalComponent,
    TrainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebase),
    PdfViewerModule,
    DialogModule,
    NgbModule,
    LightboxModule,
    ButtonModule,
    TooltipModule,
    CheckboxModule,
    CardModule,
    ProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtractComponent } from './components/extract/extract.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrainComponent } from './components/train/train.component';
import { ExtractLandingComponent } from './components/extract-landing/extract-landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'extract', component: ExtractComponent },
  { path: 'train', component: TrainComponent },
  { path: 'extract-landing', component: ExtractLandingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

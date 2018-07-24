import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalSymptomsComponent } from '../clinical-symptoms/clinical-symptoms.component';
import { HeaderComponent } from '../core/header/header.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Header',
    pathMatch: 'full'
  },
  {path: 'Header' , component: HeaderComponent },
  {path: 'ClinicalSymptoms', component: ClinicalSymptomsComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents =  [ ClinicalSymptomsComponent, HeaderComponent];

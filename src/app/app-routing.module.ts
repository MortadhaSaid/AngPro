import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TF1Component } from './tf1/tf1.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Other2Component } from './other2.component';

const routes: Routes = [{ path: '', component: Other2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Other2RoutingModule { }

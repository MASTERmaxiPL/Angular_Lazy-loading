import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Other1Component } from './other1.component';

const routes: Routes = [{ path: '', component: Other1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Other1RoutingModule { }

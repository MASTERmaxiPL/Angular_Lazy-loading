import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Other2RoutingModule } from './other2-routing.module';
import { Other2Component } from './other2.component';


@NgModule({
  declarations: [
    Other2Component
  ],
  imports: [
    CommonModule,
    Other2RoutingModule
  ]
})
export class Other2Module { }

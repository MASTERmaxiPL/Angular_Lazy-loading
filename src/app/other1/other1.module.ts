import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Other1RoutingModule } from './other1-routing.module';
import { Other1Component } from './other1.component';


@NgModule({
  declarations: [
    Other1Component
  ],
  imports: [
    CommonModule,
    Other1RoutingModule
  ]
})
export class Other1Module { }

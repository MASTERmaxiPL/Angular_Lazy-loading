import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';


@NgModule({
  declarations: [
    DateComponent
  ],
  imports: [
    CommonModule,
    DateRoutingModule
  ]
})
export class DateModule { }

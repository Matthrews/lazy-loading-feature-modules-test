import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { BarPipe } from './a.pipe';


@NgModule({
  declarations: [
    CustomersComponent,
    BarPipe
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ],
  exports: [ BarPipe ]
})
export class CustomersModule { }

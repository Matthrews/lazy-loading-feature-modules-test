import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { BarPipe } from './a.pipe';
import { UnlessDirective } from '../orders/b.directive';
import { FucPipe } from '../products/c.pipe';

@NgModule({
  declarations: [
    CustomersComponent,
    BarPipe,
    UnlessDirective,
    FucPipe,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ],
  exports: [ BarPipe ]
})
export class CustomersModule { }

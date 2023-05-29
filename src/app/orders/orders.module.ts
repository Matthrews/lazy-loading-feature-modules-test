import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { UnlessDirective } from './b.directive';


@NgModule({
  declarations: [
    OrdersComponent,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports: [ UnlessDirective ]
})
export class OrdersModule { }

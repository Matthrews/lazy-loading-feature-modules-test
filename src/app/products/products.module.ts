import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from './shared.module';
// import { FucPipe } from './c.pipe';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [SharedModule],
})
export class ProductsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FucPipe } from './c.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FucPipe],
  exports: [CommonModule, FormsModule, FucPipe],
})
export class SharedModule {}

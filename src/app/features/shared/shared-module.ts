import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const imports = [CommonModule]

@NgModule({
  declarations: [],
  imports: imports,
  exports: [...imports]
})
export class SharedModule { }

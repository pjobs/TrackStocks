import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvTableComponent } from './pv-table/pv-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PvTableComponent],
  exports: [PvTableComponent]
})
export class PvModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvTableComponent } from './pv-table/pv-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [PvTableComponent],
  exports: [PvTableComponent]
})
export class PvModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PvTableComponent } from './pv-table/pv-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatToolbar, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { PvEditTableComponent } from './pv-edit-table/pv-edit-table.component';
import { DynamicFieldComponent } from './pv-fields/dynamic-field/dynamic-field.component';
import { DropdownFieldComponent } from './pv-fields/dropdown-field/dropdown-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [PvTableComponent,PvEditTableComponent, DynamicFieldComponent, DropdownFieldComponent],
  exports: [PvTableComponent,PvEditTableComponent]
})
export class PvModule { }

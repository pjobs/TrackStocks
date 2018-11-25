import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { PvTableColumn } from '../pv-table/pv-table.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { FieldDefinition } from '../pv-fields/view-models/field-definition';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

export interface PvEditTableColumn {
  key: string,
  displayName: string,
  field: FieldDefinition
}


@Component({
  selector: 'pv-edit-table',
  templateUrl: './pv-edit-table.component.html',
  styleUrls: ['./pv-edit-table.component.scss']
})
export class PvEditTableComponent implements OnInit {
  @Input() dataSource: Observable<any[]>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  _pvColumns: PvEditTableColumn[];
  sortedDS = new MatTableDataSource();
  columnKeys: string[] = [];
  columns: any = {};
  form: FormGroup;
  fields: Array<FieldDefinition>;
  submitted: boolean = false;
  currentEditRow:any=null;
  rowForm:FormGroup;


  get pvColumns(): PvEditTableColumn[] {
    return this._pvColumns;
  }

  @Input()
  set pvColumns(value: PvEditTableColumn[]) {
    value.push({ key: 'action', displayName: 'Action', field: null })
    this._pvColumns = value;

    this._pvColumns.forEach((col) => {
      col.displayName = col.displayName || col.key;
      this.columns[col.key] = col;
    });
    this.columnKeys = Array.from(this._pvColumns, (col) => col.key);
  }

  constructor(private _formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => this.sortedDS.data = data);
    this.sortedDS.sort = this.sort;
    this.sortedDS.paginator = this.paginator;
    this.form = this._formBuilder.group({
      rowEditing: this._formBuilder.array([])
    });
  }

  editRow(row) {
    if(this.currentEditRow) { 
      if(row.inEditMode && row === this.currentEditRow) return false;
      this.onClose(this.currentEditRow); 
    }
    row.inEditMode = true;
    this.currentEditRow = row;
    let group = {};
    let rowCopy = Object.assign({}, row);

    this.columnKeys.forEach( key => {
      let field = this.columns[key].field;
      if(field) { 
        group[field.key] = field.required ? new FormControl(rowCopy[key], Validators.required): new FormControl(rowCopy[key]); 
      }
    })
    this.form = new FormGroup(group);
  }

  updateRow(row) {
    if(this.currentEditRow) { 
      this.submitted = true;
      if (this.form.valid) {
        this.update.emit(this.currentEditRow)
        this.onClose(this.currentEditRow); 
      }
    }
  }

  onClose(row) {
    this.clearNonSubmitedNewRowsData();
    row.inEditMode = false;
    this.form.reset();
    this.submitted = false;
    row = null;
  }

  onSubmit() {
    this.onSave();
  }

  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      // this.status = 'waiting';
      // this.update.emit(this.form.value);
    }
  }

  addNew() {
    this.clearNonSubmitedNewRowsData();
    let newRow = {}
    this.columnKeys.forEach((c)=> {
      newRow[c] = null;
    });
    newRow['isNew'] = true;
    newRow['hasSubmitted'] = false;
    let data = this.sortedDS.data.slice();
    data.unshift(newRow);
    this.sortedDS.data = data;
    this.editRow(this.sortedDS.data[0]);
  }

  clearNonSubmitedNewRowsData() {
    let data = this.sortedDS.data.slice();
    if(data.length>0 && data[0]['isNew'] && !data[0]['hasSubmitted']) {
      data.shift();
    }
    this.sortedDS.data = data;
  }
}


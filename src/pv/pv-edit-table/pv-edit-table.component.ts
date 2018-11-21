import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PvTableColumn } from '../pv-table/pv-table.component';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'pv-edit-table',
  templateUrl: './pv-edit-table.component.html',
  styleUrls: ['./pv-edit-table.component.scss']
})
export class PvEditTableComponent implements OnInit {
  @Input() dataSource: Observable<any[]>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  _pvColumns: PvTableColumn[];
  sortedDS = new MatTableDataSource();
  columns: string[] = [];
  columnTitles: {};

  get pvColumns(): PvTableColumn[] {
    return this._pvColumns;
  }
  
  @Input()
  set pvColumns(value: PvTableColumn[]) {
    this._pvColumns = value;
    this.columns = Array.from(this._pvColumns, (col) => col.name);
    this.columnTitles = this._pvColumns.reduce((map, col) => { map[col.name] = col.displayName || col.name; return map; });
  }
  constructor() {}

  ngOnInit() {
    this.dataSource.subscribe((data) => this.sortedDS.data = data);
    this.sortedDS.sort = this.sort;
    this.sortedDS.paginator = this.paginator;
  }
}


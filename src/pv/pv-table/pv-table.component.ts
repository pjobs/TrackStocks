import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable, of } from 'rxjs';

export interface PvTableColumn {
  name: string,
  displayName: string
}

@Component({
  selector: 'pv-table',
  templateUrl: './pv-table.component.html',
  styleUrls: ['./pv-table.component.scss']
})
export class PvTableComponent implements OnInit {
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


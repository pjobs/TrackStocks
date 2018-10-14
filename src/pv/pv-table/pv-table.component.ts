import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';

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
  @Input() pvColumns: PvTableColumn[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sortedDS = new MatTableDataSource();
  columns: string[] = [];
  columnTitles: {};
  constructor() {
  }

  ngOnInit() {
    this.columns = Array.from(this.pvColumns, (col) => col.name);
    this.columnTitles = this.pvColumns.reduce((map, col) => { map[col.name] = col.displayName || col.name; return map; });
    this.dataSource.subscribe((data) => this.sortedDS.data = data);
    this.sortedDS.sort = this.sort;
    this.sortedDS.paginator = this.paginator;
  }
}


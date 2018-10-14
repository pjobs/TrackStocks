import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StockListDataSource } from './stock-list-datasource';
import { StockApiService } from '../stockServices/stock-api.service';
import { Observable } from 'rxjs';
import { PvTableColumn } from '../../pv/pv-table/pv-table.component';

@Component({
  selector: 'st-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Observable<any>//StockListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: PvTableColumn[] = [
    { name: 'id', displayName: 'Title' }, 
    { name: 'symbol', displayName: 'Symbol' }, 
    { name: 'name', displayName: 'Company' },
    { name: 'price', displayName: 'Price' }
  ];

  constructor(private stockApi: StockApiService) { }

  ngOnInit() {
    this.dataSource = this.stockApi.getWatchList(0);
  }
}

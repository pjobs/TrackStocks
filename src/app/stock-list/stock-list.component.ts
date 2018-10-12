import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StockListDataSource } from './stock-list-datasource';
import { StockApiService } from '../stockServices/stock-api.service';

@Component({
  selector: 'st-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StockListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'symbol', 'name'];

  constructor(private stockApi: StockApiService){}

  ngOnInit() {
    this.dataSource = new StockListDataSource(this.paginator, this.sort);
  }
}

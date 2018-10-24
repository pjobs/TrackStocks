import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StockApiService } from '../stockServices/stock-api.service';
import { Observable, Subject } from 'rxjs';
import { PvTableColumn } from '../../pv/pv-table/pv-table.component';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'st-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() small: boolean = false;
  dataSource: Observable<any>;
  private unsubscribeAll = new Subject();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: PvTableColumn[] = [];

  constructor(private stockApi: StockApiService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Small]).pipe(takeUntil(this.unsubscribeAll)).subscribe((state: BreakpointState) => {
      if (state.matches || this.small) {
        this.displayedColumns = [
          { name: 'identifier1', displayName: 'Id' },
          { name: 'id', displayName: 'Id' },
          { name: 'symbol', displayName: 'Symbol' },
          { name: 'price', displayName: 'Price' }
        ];
      }
      else {
        this.displayedColumns = [
          { name: 'identifier1', displayName: 'Id' },
          { name: 'id', displayName: 'Id' },
          { name: 'symbol', displayName: 'Symbol' },
          { name: 'name', displayName: 'Company' },
          { name: 'price', displayName: 'Price' }
        ];
      }
    });

    this.dataSource = this.stockApi.getWatchList(0);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}

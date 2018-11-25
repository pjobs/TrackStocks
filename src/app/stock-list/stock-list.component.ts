import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StockApiService } from '../stockServices/stock-api.service';
import { Observable, Subject } from 'rxjs';
import { PvTableColumn } from '../../pv/pv-table/pv-table.component';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { PvEditTableColumn } from 'src/pv/pv-edit-table/pv-edit-table.component';
import { FieldDefinition } from 'src/pv/pv-fields/view-models/field-definition';

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
  displayedColumns: PvEditTableColumn[] = [];
  stockDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      showLabel:false,
      required: true
    },
    { key: 'symbol',
      type: 'string',
      isId: false,
      label: 'Symbol',
      showLabel:false,
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Name',
      showLabel:false,
      required: true
    },
    {
      key: 'price',
      type: 'number',
      isId: false,
      label: 'price',
      showLabel:false,
      required: true
    }
    // ,{
    //   key: 'continent',
    //   type: 'string',
    //   isId: false,
    //   label: 'Continent',
    //   required: false,
    //   inputType: 'lookUp',
    //   options: [ {value: 'Africa', text: 'Africa'}, {value: 'Asia', text: 'Asia'}, {value: 'Europe', text: 'Europe'}]
    // }
  ];
  

  constructor(private stockApi: StockApiService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Small]).pipe(takeUntil(this.unsubscribeAll)).subscribe((state: BreakpointState) => {
      if (state.matches || this.small) {
          // { name: 'id', displayName: 'Id', field: this.stockDefinition.find(k=>k.key == 'id') },
          this.displayedColumns = [
          //{ name: 'id', displayName: 'Id', field: this.stockDefinition.find(k=>k.key == 'id') },
          { key: 'symbol', displayName: 'Symbol', field: this.stockDefinition.find(k=>k.key == 'symbol')  },
          { key: 'price', displayName: 'Price', field: this.stockDefinition.find(k=>k.key == 'price')  }
        ];
      }
      else {
          // { name: 'identifier1', displayName: 'Id', field: this.stockDefinition.find(k=>k.key == 'id') },
          this.displayedColumns = [
          //{ name: 'id', displayName: 'Id', field: this.stockDefinition.find(k=>k.key == 'id') },
          { key: 'symbol', displayName: 'Symbol', field: this.stockDefinition.find(k=>k.key == 'symbol')  },
          { key: 'name', displayName: 'Company', field: this.stockDefinition.find(k=>k.key == 'name')  },
          { key: 'price', displayName: 'Price', field: this.stockDefinition.find(k=>k.key == 'price')   }
        ];
      }
    });

    this.dataSource = this.stockApi.getWatchList(0).pipe(takeUntil(this.unsubscribeAll));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onRowUpdate(value): void {
  }

}

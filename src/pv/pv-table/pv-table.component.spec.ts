import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvTableComponent, PvTableColumn } from './pv-table.component';
import { StockListItem } from '../../app/stock-list/stock-list-item';
import { of } from 'rxjs/internal/observable/of';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

describe('PvTableComponent', () => {
  let component: PvTableComponent;
  let fixture: ComponentFixture<PvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PvTableComponent],
      imports: [MatTableModule, MatPaginatorModule, MatSortModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvTableComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When we set Columns', () => {
    beforeEach(() => {

      const EXAMPLE_DATA: StockListItem[] = [
        { id: 1, symbol: 'AAPL', name: 'Apple', price: 172.00 },
        { id: 2, symbol: 'NDAQ', name: 'Nasdaq', price: 82.00 },
        { id: 3, symbol: 'MSFT', name: 'Microsoft', price: 102.00 },
        { id: 4, symbol: 'NFLX', name: 'Netflix', price: 322.00 },
        { id: 5, symbol: 'FB', name: 'Facebook', price: 152.00 },
      ];


      let displayedColumns: PvTableColumn[] = [
        { name: 'id', displayName: 'Title' },
        { name: 'symbol', displayName: 'Symbol' },
        { name: 'name', displayName: 'Company' },
        { name: 'price', displayName: 'Price' }
      ];

      component.pvColumns = displayedColumns;
      component.dataSource = of(EXAMPLE_DATA);
      fixture.detectChanges();
    });
    it('should have matching columns', () => {
      expect(component.columns.length).toBeGreaterThan(1);
    });
  })
});

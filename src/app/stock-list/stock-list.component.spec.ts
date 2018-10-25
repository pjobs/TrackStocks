
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';
import { PvTableComponent } from '../../pv/pv-table/pv-table.component';
import { MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent } from 'ng-mocks';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListComponent, MockComponent(PvTableComponent) ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

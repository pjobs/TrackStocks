
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MatGridListModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { StockListComponent } from '../stock-list/stock-list.component';
import { MockComponent } from 'ng-mocks';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, MockComponent(StockListComponent)],
      imports: [MatGridListModule, MatCardModule, MatIconModule, MatMenuModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

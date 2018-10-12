import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvTableComponent } from './pv-table.component';

describe('PvTableComponent', () => {
  let component: PvTableComponent;
  let fixture: ComponentFixture<PvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

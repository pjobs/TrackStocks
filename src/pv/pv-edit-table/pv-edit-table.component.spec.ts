import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvEditTableComponent } from './pv-edit-table.component';

describe('PvEditTableComponent', () => {
  let component: PvEditTableComponent;
  let fixture: ComponentFixture<PvEditTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvEditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

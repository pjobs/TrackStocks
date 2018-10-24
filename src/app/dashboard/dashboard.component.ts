import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'st-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any;
  ngOnInit(): void {
    /** Based on the screen size, switch from standard to one column per row */
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cards = [
          { title: 'Stocks', cols: 2, rows: 2 },
          { title: 'Markets', cols: 1, rows: 1 },
          { title: 'Latest News', cols: 1, rows: 1 },
          { title: 'Earnings', cols: 1, rows: 1 }
        ];
      } else {
        this.cards = [
          { title: 'Stocks', cols: 1, rows: 3 },
          { title: 'Markets', cols: 1, rows: 1 },
          { title: 'News', cols: 1, rows: 1 },
          { title: 'Earnings', cols: 1, rows: 1 }
        ];
      }
    });
  }
  constructor(private breakpointObserver: BreakpointObserver) { }
}

import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'pv-table',
  templateUrl: './pv-table.component.html',
  styleUrls: ['./pv-table.component.scss']
})
export class PvTableComponent implements OnInit {
  @Input() dataSource: DataSource<any[]>;
  @Input() displayedColumns: any[]=[];
    constructor() { }

  ngOnInit() {
  }

}

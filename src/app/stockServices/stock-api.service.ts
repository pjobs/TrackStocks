import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockListDataSource } from '../stock-list/stock-list-datasource';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor() { }

  getWatchList(id: number): Observable<any> {
    return of({});
  }
}

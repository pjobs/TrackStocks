import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockListItem } from '../stock-list/stock-list-item';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor() { }

  getWatchList(id: number): Observable<any> {
    const EXAMPLE_DATA: StockListItem[] = [
      { id: 1, symbol: 'AAPL', name: 'Apple', price: 172.00 },
      { id: 2, symbol: 'NDAQ', name: 'Nasdaq' , price: 82.00 },
      { id: 3, symbol: 'MSFT', name: 'Microsoft' , price: 102.00 },
      { id: 4, symbol: 'NFLX', name: 'Netflix' , price: 322.00 },
      { id: 5, symbol: 'FB', name: 'Facebook' , price: 152.00 },
    ];
    return of(EXAMPLE_DATA);
  }
}

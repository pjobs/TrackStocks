import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockListItem } from '../stock-list/stock-list-item';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { UrlInterceptor } from 'src/http-interceptor/urlInterceptor';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }

  getWatchList(id: number): Observable<any> {
    let symbols = ['aapl', 'nflx', 'fb', 'snap', 'goog', 'amzn', 'msft'];
    return this.http.get<any>(symbols.join(',')).pipe(map((data) => {
      let quotes = symbols.map((symbol) => {
        let quote = data[symbol.toUpperCase()]["quote"];
        if (quote) {
          return { symbol: symbol, name: quote.companyName, price: quote.latestPrice };
        }
        return null;
      });
      return quotes;
    }));
  }
}

export let stockBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UrlInterceptor,
  multi: true
};

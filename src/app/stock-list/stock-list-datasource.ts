import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StockListItem {
  symbol: string,
  name: string;
  id: number;
  price: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: StockListItem[] = [
  { id: 10, symbol: 'AAPL', name: 'Apple', price: 172.00 },
  { id: 20, symbol: 'NDAQ', name: 'Nasdaq' , price: 82.00 },
  { id: 30, symbol: 'MSFT', name: 'Microsoft' , price: 102.00 },
  { id: 40, symbol: 'NFLX', name: 'Netflix' , price: 322.00 },
  { id: 50, symbol: 'FB', name: 'Facebook' , price: 152.00 },
];

/**
 * Data source for the StockList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StockListDataSource extends DataSource<StockListItem> {
  data: StockListItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<StockListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      // this.paginator.page,
      // this.sort.sortChange
    ];

    // Set the paginators length
    //this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: StockListItem[]) {
    // const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    // return data.splice(startIndex, this.paginator.pageSize);
    return data;
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: StockListItem[]) {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

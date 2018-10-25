import { TestBed, inject } from '@angular/core/testing';

import { StockApiService } from './stock-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptorsModule } from 'src/http-interceptor/httpInterceptor.module';

describe('StockApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpInterceptorsModule],
      providers: [StockApiService]
    });
  });

  it('should be created', inject([StockApiService], (service: StockApiService) => {
    expect(service).toBeTruthy();
  }));
});

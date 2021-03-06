import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PvModule } from 'src/pv/pv.module';
import { appRoutes } from './app.routes';
import { HttpInterceptorsModule } from 'src/http-interceptor/httpInterceptor.module';
import { stockBackendProvider } from './stockServices/stock-api.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StockListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PvModule,
    HttpInterceptorsModule
  ],
  providers: [stockBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

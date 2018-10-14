import { Routes } from "@angular/router";
import { StockListComponent } from "./stock-list/stock-list.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks', component: StockListComponent},
    { path: '', component: DashboardComponent},
    { path: '**', component: DashboardComponent}
];
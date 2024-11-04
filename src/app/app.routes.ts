import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
];

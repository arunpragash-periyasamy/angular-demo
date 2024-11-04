import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  
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

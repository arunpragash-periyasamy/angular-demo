import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  tableData = [
    { make: 'Honda', model: 'Accord', price: 30000 },
    { make: 'Chevrolet', model: 'Impala', price: 28000 },
    { make: 'BMW', model: 'X5', price: 75000 },
    { make: 'Honda', model: 'Accord', price: 30000 },
    { make: 'Chevrolet', model: 'Impala', price: 28000 },
    { make: 'BMW', model: 'X5', price: 75000 }
  ];
  columnDefinitions: ColDef[] = [
    { headerName: 'Making', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];
}

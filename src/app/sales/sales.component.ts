import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {


  salesData = [
    { saleDate: '2024-03-10', product: 'iPhone 14', brand: 'Apple', price: 999, quantity: 5, totalSales: 4995 },
    { saleDate: '2024-03-11', product: 'Galaxy S22', brand: 'Samsung', price: 799, quantity: 3, totalSales: 2397 },
    { saleDate: '2024-03-12', product: 'Pixel 6', brand: 'Google', price: 599, quantity: 4, totalSales: 2396 },
    { saleDate: '2024-03-15', product: '9 Pro', brand: 'OnePlus', price: 969, quantity: 2, totalSales: 1938 },
    { saleDate: '2024-03-18', product: 'Xperia 1', brand: 'Sony', price: 1299, quantity: 1, totalSales: 1299 },
    { saleDate: '2024-03-20', product: 'V60', brand: 'LG', price: 799, quantity: 1, totalSales: 799 },
    { saleDate: '2024-03-22', product: 'Mi 11', brand: 'Xiaomi', price: 749, quantity: 2, totalSales: 1498 },
    { saleDate: '2024-03-25', product: 'Find X3', brand: 'Oppo', price: 1149, quantity: 1, totalSales: 1149 },
    { saleDate: '2024-03-28', product: 'G50', brand: 'Nokia', price: 299, quantity: 5, totalSales: 1495 },
    { saleDate: '2024-04-01', product: 'Edge', brand: 'Motorola', price: 699, quantity: 3, totalSales: 2097 },
    { saleDate: '2024-04-03', product: 'P40', brand: 'Huawei', price: 999, quantity: 1, totalSales: 999 },
    { saleDate: '2024-04-05', product: 'U12', brand: 'HTC', price: 699, quantity: 2, totalSales: 1398 },
    { saleDate: '2024-04-07', product: 'ZenFone 8', brand: 'Asus', price: 599, quantity: 1, totalSales: 599 },
    { saleDate: '2024-04-10', product: 'GT', brand: 'Realme', price: 499, quantity: 4, totalSales: 1996 },
    { saleDate: '2024-04-12', product: '10 Pro', brand: 'TCL', price: 449, quantity: 3, totalSales: 1347 },
    { saleDate: '2024-04-15', product: 'Key2', brand: 'BlackBerry', price: 649, quantity: 2, totalSales: 1298 },
    { saleDate: '2024-04-17', product: 'X70 Pro', brand: 'Vivo', price: 899, quantity: 1, totalSales: 899 },
    { saleDate: '2024-04-20', product: 'Axon 20', brand: 'ZTE', price: 549, quantity: 2, totalSales: 1098 },
    { saleDate: '2024-04-22', product: 'FP3', brand: 'Fairphone', price: 449, quantity: 3, totalSales: 1347 },
    { saleDate: '2024-04-25', product: 'Phone', brand: 'Essential', price: 699, quantity: 1, totalSales: 699 }
  ];
  designType: string = 'table1'; 
}

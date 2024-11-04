import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  purchaseData = [
    { date: '2024-01-15', customer: 'John Doe', make: 'Toyota', model: 'Camry', price: 24000, quantity: 1, total: 24000 },
    { date: '2024-01-17', customer: 'Jane Smith', make: 'Ford', model: 'Focus', price: 22000, quantity: 1, total: 22000 },
    { date: '2024-01-20', customer: 'Michael Brown', make: 'Nissan', model: 'Altima', price: 23000, quantity: 2, total: 46000 },
    { date: '2024-01-22', customer: 'Emily Davis', make: 'Honda', model: 'Civic', price: 21000, quantity: 1, total: 21000 },
    { date: '2024-01-25', customer: 'Chris Johnson', make: 'Chevrolet', model: 'Malibu', price: 25000, quantity: 1, total: 25000 },
    { date: '2024-01-30', customer: 'Amanda Lee', make: 'Hyundai', model: 'Elantra', price: 19000, quantity: 1, total: 19000 },
    { date: '2024-02-01', customer: 'David Wilson', make: 'Kia', model: 'Optima', price: 20000, quantity: 2, total: 40000 },
    { date: '2024-02-03', customer: 'Sarah Martin', make: 'Subaru', model: 'Legacy', price: 26000, quantity: 1, total: 26000 },
    { date: '2024-02-07', customer: 'Daniel Garcia', make: 'Mazda', model: '6', price: 27000, quantity: 1, total: 27000 },
    { date: '2024-02-10', customer: 'Laura Rodriguez', make: 'Volkswagen', model: 'Passat', price: 30000, quantity: 1, total: 30000 },
    { date: '2024-02-12', customer: 'James Martinez', make: 'Chrysler', model: '300', price: 32000, quantity: 1, total: 32000 },
    { date: '2024-02-14', customer: 'Sophia Hernandez', make: 'Buick', model: 'Regal', price: 29000, quantity: 1, total: 29000 },
    { date: '2024-02-16', customer: 'Robert White', make: 'Dodge', model: 'Charger', price: 35000, quantity: 1, total: 35000 },
    { date: '2024-02-20', customer: 'Jessica Lewis', make: 'Tesla', model: 'Model 3', price: 39000, quantity: 1, total: 39000 },
    { date: '2024-02-25', customer: 'William Young', make: 'Volvo', model: 'S60', price: 37000, quantity: 1, total: 37000 },
    { date: '2024-02-27', customer: 'Mia King', make: 'Porsche', model: 'Cayman', price: 60000, quantity: 1, total: 60000 },
    { date: '2024-03-01', customer: 'Oliver Wright', make: 'Jaguar', model: 'XF', price: 65000, quantity: 1, total: 65000 },
    { date: '2024-03-03', customer: 'Liam Hill', make: 'Infiniti', model: 'Q50', price: 41000, quantity: 1, total: 41000 },
    { date: '2024-03-05', customer: 'Charlotte Green', make: 'Acura', model: 'TLX', price: 39000, quantity: 1, total: 39000 },
    { date: '2024-03-07', customer: 'Elijah Adams', make: 'Lincoln', model: 'MKZ', price: 42000, quantity: 1, total: 42000 }
];
 

designType: string = 'table2'; 
}

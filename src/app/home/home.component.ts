import { Component, computed } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private stateService: StateService){}
  counter = computed(()=>this.stateService.counter());
   productData = [
    { productId: 'P001', name: 'Air Max', brand: 'Nike', price: 150, stock: 50, category: 'Footwear' },
    { productId: 'P002', name: 'Ultra Boost', brand: 'Adidas', price: 180, stock: 30, category: 'Footwear' },
    { productId: 'P003', name: 'RS-X', brand: 'Puma', price: 120, stock: 20, category: 'Footwear' },
    { productId: 'P004', name: 'Classic', brand: 'Reebok', price: 85, stock: 15, category: 'Footwear' },
    { productId: 'P005', name: 'HOVR', brand: 'Under Armour', price: 140, stock: 25, category: 'Footwear' },
    { productId: 'P006', name: '574', brand: 'New Balance', price: 100, stock: 40, category: 'Footwear' },
    { productId: 'P007', name: 'Gel-Kayano', brand: 'Asics', price: 160, stock: 10, category: 'Footwear' },
    { productId: 'P008', name: 'Endorphin', brand: 'Saucony', price: 170, stock: 8, category: 'Footwear' },
    { productId: 'P009', name: 'Clifton', brand: 'Hoka', price: 130, stock: 18, category: 'Footwear' },
    { productId: 'P010', name: 'Go Walk', brand: 'Skechers', price: 90, stock: 60, category: 'Footwear' },
    { productId: 'P011', name: 'Old Skool', brand: 'Vans', price: 70, stock: 100, category: 'Footwear' },
    { productId: 'P012', name: 'Chuck Taylor', brand: 'Converse', price: 60, stock: 80, category: 'Footwear' },
    { productId: 'P013', name: 'Classic Clog', brand: 'Crocs', price: 50, stock: 120, category: 'Footwear' },
    { productId: 'P014', name: '6-Inch Boot', brand: 'Timberland', price: 200, stock: 30, category: 'Footwear' },
    { productId: 'P015', name: '1460', brand: 'Dr. Martens', price: 150, stock: 25, category: 'Footwear' },
    { productId: 'P016', name: 'Classic Short', brand: 'Ugg', price: 180, stock: 20, category: 'Footwear' },
    { productId: 'P017', name: 'Moab', brand: 'Merrell', price: 120, stock: 15, category: 'Footwear' },
    { productId: 'P018', name: 'Silver Ridge', brand: 'Columbia', price: 80, stock: 50, category: 'Apparel' },
    { productId: 'P019', name: 'Hedgehog', brand: 'North Face', price: 130, stock: 35, category: 'Footwear' },
    { productId: 'P020', name: 'Beta AR', brand: 'Arc’teryx', price: 450, stock: 5, category: 'Apparel' }
];


designType: string = 'table3'; 
}

import { CommonModule } from '@angular/common';
import {
  Component,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from '@angular/core';
import { TableComponent1 } from './table1/table1.component';
import { TableComponent2 } from './table2/table.component';
import { TableComponent3 } from './table3/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // Add HttpClientModule here
    TableComponent1,
    TableComponent2,
    TableComponent3,
  ],
  template: `<ng-container
    *ngComponentOutlet="currentTemplate; injector: createInjector()"
  ></ng-container>`,
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges, OnInit {
  currentTemplate: Type<any> | null = null;
  private baseUrls: { [key: string]: string } = {
    table1: 'https://dummyapi.online/api/movies',
    table2: 'https://dummyapi.online/api/products',
    table3: 'https://dummyapi.online/api/social-profiles',
  };
  rowData: any[] = [];
  @Input() designType: string = '';

  private designComponents: { [key: string]: Type<any> } = {
    table1: TableComponent1,
    table2: TableComponent2,
    table3: TableComponent3,
  };

  constructor(private injector: Injector, private httpClient: HttpClient) {}

  ngOnInit() {
    this.get_products();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['designType']) {
      this.setTemplate(this.designType);
    }
  }

  get_products() {
    const url = this.baseUrls[this.designType] || this.baseUrls['table1']; // Fallback to table1 URL if designType is not found
    this.httpClient.get<any[]>(url).subscribe((res) => {
      this.rowData = res;
    });
  }

  setTemplate(designType: string) {
    this.currentTemplate = this.designComponents[designType] || TableComponent1; // Fallback to TableComponent1
  }

  // Create an Injector to pass @Input() rowData to child components
  createInjector() {
    return Injector.create({
      providers: [{ provide: 'rowData', useValue: this.rowData }],
      parent: this.injector,
    });
  }
}

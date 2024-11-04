import { CommonModule } from '@angular/common';
import { Component, Injector, Input, OnChanges, SimpleChanges, Type } from '@angular/core';
import { TableComponent1 } from './table1/table1.component';
import { TableComponent2 } from './table2/table.component';
import { TableComponent3 } from './table3/table.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableComponent1, TableComponent2, TableComponent3],
  template: `<ng-container *ngComponentOutlet="currentTemplate; injector: createInjector()"></ng-container>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  currentTemplate: Type<any> | null = null;

  @Input() rowData: any[] = []; 
  @Input() designType: string = "";

  private designComponents: { [key: string]: Type<any> } = {
    table1: TableComponent1,
    table2: TableComponent2,
    table3: TableComponent3,
  };

  constructor(private injector: Injector) {
    // Optional: You could set the default template here if desired.
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['designType']) {
      this.setTemplate(this.designType);
    }
  }

  setTemplate(designType: string) {
    this.currentTemplate = this.designComponents[designType] || TableComponent1; // Fallback to TableComponent1
  }

  // Create an Injector to pass @Input() rowData to child components
  createInjector() {
    return Injector.create({
      providers: [
        { provide: 'rowData', useValue: this.rowData }
      ],
      parent: this.injector // Ensure the parent injector is included
    });
  }
}

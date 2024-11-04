import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent3 {
  
  @Input() rowData: any[] = [];
  
  constructor(@Inject('rowData') private injectedRowData: any[]) {
    this.rowData = injectedRowData; // Get rowData from the injector
  }

}

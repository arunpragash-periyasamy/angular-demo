import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class TableComponent1 implements OnInit {
  
  rowData: any[] = [];

  constructor(@Inject('rowData') private injectedRowData: any[]) {
    this.rowData = injectedRowData; // Get rowData from the injector
  }

  ngOnInit() {
    if (this.rowData && this.rowData.length > 0) {
      console.log('Row data received:', this.rowData);
    } else {
      console.log('No row data received.');
    }
  }
}

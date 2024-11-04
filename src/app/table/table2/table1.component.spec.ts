import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent2 } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent2;
  let fixture: ComponentFixture<TableComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent1 } from './table1.component';

describe('TableComponent', () => {
  let component: TableComponent1;
  let fixture: ComponentFixture<TableComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

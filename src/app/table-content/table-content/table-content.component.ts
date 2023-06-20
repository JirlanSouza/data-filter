import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataRow, FileData } from 'src/app/shared/core/file-data.type';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss'],
})
export class TableContentComponent implements OnInit {
  @Input() fileData?: Observable<FileData>;
  @Output() dataFilterCancell: EventEmitter<null> = new EventEmitter();
  tableData: MatTableDataSource<DataRow> = new MatTableDataSource();
  tableHeaders: DataRow = [];
  selection = new SelectionModel<DataRow>(true, []);
  tableDataFilter = '';

  ngOnInit(): void {
    this.fileData?.subscribe((data) => {
      this.tableData.data = data.slice(1);
      this.tableHeaders = ['select'].concat(data[0]).slice(0, 10);
      this.selection.select(...this.tableData.data);
    });
  }

  applyFilter() {
    this.tableData.filter = this.tableDataFilter.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableData.data);
  }

  checkboxLabel(row?: DataRow): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      0 + 1
    }`;
  }
}

import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRow, FileData } from 'src/app/shared/core/file-data.type';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss'],
})
export class TableContentComponent implements OnInit {
  @Input() fileData?: Observable<FileData>;
  tableData: FileData = [];
  tableHeaders: DataRow = [];
  selection = new SelectionModel<DataRow>(true, []);

  ngOnInit(): void {
    this.fileData?.subscribe((data) => {
      this.tableData = data.slice(1);
      this.tableHeaders = ['select'].concat(data[0]).slice(0, 10);
      this.selection.select(...this.tableData);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableData);
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

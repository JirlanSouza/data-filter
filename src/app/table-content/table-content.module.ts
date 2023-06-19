import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ResizeColumnDirective } from './table-content/resize-column.directive';
import { TableContentComponent } from './table-content/table-content.component';

@NgModule({
  declarations: [TableContentComponent, ResizeColumnDirective],
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  exports: [TableContentComponent],
})
export class TableContentModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ResizeColumnDirective } from './table-content/resize-column.directive';
import { TableContentComponent } from './table-content/table-content.component';

@NgModule({
  declarations: [TableContentComponent, ResizeColumnDirective],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TableContentComponent],
})
export class TableContentModule {}

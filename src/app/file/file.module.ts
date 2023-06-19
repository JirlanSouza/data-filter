import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FileImportComponent } from './file-import/file-import.component';

@NgModule({
  declarations: [FileImportComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [FileImportComponent],
  providers: [],
})
export class FileModule {}

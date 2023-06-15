import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FileImportComponent } from './file-import/file-import.component';

@NgModule({
  declarations: [FileImportComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [FileImportComponent],
  providers: [MatInput, MatButton],
})
export class FileModule {}

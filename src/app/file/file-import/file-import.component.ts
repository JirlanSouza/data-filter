import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
})
export class FileImportComponent {
  isDraging = false;

  constructor(private fileService: FileService) {}

  async onFileInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.fileService.handleFileData(files.item(0) as File);
    }
  }

  onFileDragLeaving(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraging = false;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraging = true;
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraging = false;
    const files = event.dataTransfer?.files;

    if (files && files.length > 0) {
      this.fileService.handleFileData(files.item(0) as File);
    }
  }
}

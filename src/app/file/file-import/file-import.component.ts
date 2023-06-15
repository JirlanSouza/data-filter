import { Component, EventEmitter, Output } from '@angular/core';
import { Sheet } from 'xlsx';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
})
export class FileImportComponent {
  isDraging = false;
  @Output() onSheetImported = new EventEmitter<Sheet>();

  constructor(private fileService: FileService) {}

  async onFileInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    await this.handleFileEvent(target.files);
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

  async onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraging = false;
    await this.handleFileEvent(event.dataTransfer?.files);
  }

  async handleFileEvent(files?: FileList | null) {
    if (files && files.length > 0) {
      const data = await this.fileService.handleFileData(files.item(0) as File);
      this.onSheetImported.emit(data);
      console.log('ok', files);
    }
  }
}

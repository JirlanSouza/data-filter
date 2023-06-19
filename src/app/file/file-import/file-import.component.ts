import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FileData } from 'src/app/shared/core/file-data.type';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
})
export class FileImportComponent {
  isDraging = false;
  @Output() onFileImported = new EventEmitter<Observable<FileData>>();

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
      this.onFileImported.emit(data);
    }
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FileData } from './shared/core/file-data.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fileData?: Observable<FileData>;

  setFileData(data: Observable<FileData>) {
    this.fileData = data;
  }

  clearFileData() {
    this.fileData = undefined;
  }
}

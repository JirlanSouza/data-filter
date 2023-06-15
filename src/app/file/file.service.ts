import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  handleFileData(file: File) {
    console.log(file.name);
  }
}

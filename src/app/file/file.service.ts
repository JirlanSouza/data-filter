import { Injectable } from '@angular/core';
import { Sheet, read } from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  async handleFileData(file: File): Promise<Sheet> {
    const data = read(await file.arrayBuffer());
    const sheet = data.Sheets[data.SheetNames[0]];
    return sheet;
  }
}

import { Injectable } from '@angular/core';
import { parse } from 'papaparse';
import { Observable } from 'rxjs';
import { DataRow } from '../shared/core/file-data.type';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  handleFileData(file: File): Observable<DataRow[]> {
    return new Observable<DataRow[]>((subscribe) => {
      const data = parse<DataRow>(file, {
        complete(results) {
          subscribe.next(results.data);
          subscribe.complete();
        },
        error(error: Error) {
          subscribe.error(error);
        },
      });
    });
  }
}

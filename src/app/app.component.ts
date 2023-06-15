import { Component } from '@angular/core';
import { Sheet } from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sheetData: Sheet | null = null;

  setSheetData(data: Sheet) {
    this.sheetData = data;
  }
}

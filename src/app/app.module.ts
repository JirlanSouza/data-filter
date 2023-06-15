import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileModule } from './file/file.module';
import { LayoutModule } from './layout/layout.module';
import { TableComponent } from './tableContent/table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, LayoutModule, FileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

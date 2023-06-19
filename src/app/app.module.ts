import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileModule } from './file/file.module';
import { LayoutModule } from './layout/layout.module';
import { TableContentModule } from './table-content/table-content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, FileModule, TableContentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

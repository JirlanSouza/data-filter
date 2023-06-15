import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [HeaderComponent, TemplateComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [TemplateComponent],
  providers: [MatToolbar],
})
export class LayoutModule {}

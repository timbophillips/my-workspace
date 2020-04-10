import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFilterSelectComponent } from './ng-filter-select.component';

@NgModule({
  declarations: [NgFilterSelectComponent],
  imports: [BrowserModule, FormsModule],
  exports: [NgFilterSelectComponent],
})
export class NgFilterSelectModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class TemplateFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    MultiSelectModule,
    FileUploadModule,
    CalendarModule,
    
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    MultiSelectModule,
    FileUploadModule,
    CalendarModule
    ]
})
export class SharedModule { }

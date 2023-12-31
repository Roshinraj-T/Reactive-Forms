import { DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  options:any=[
    {id:1,name:'apple'},
    {id:2,name:'orange'},
    {id:3,name:'banana'}
  ]
  fruits = [
    { type: 'apple', value: 1 },
    { type: 'orange', value: 2 },
    { type: 'banana', value: 3 },
    { type: 'Other', value: 4 }
  ]
  imageUrl: any;

  minDate!: Date;
  FirstminDate!: Date

  myForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required]],
    mobileNumber:['',[Validators.required]],
    textArea:['',[Validators.required]],
    singleCheckbox:['',[Validators.required]],
    multipleCheckbox:[''],
    radioButton:[''],
    dropDown:[''],
    imageUpload:[],
    datePickerStart:[''],
    datePickerEnd:['']
  })

  ngOnInit(){
    this.FirstminDate=new Date();
    // this.minDate=new Date();

    // this.FirstminDate.setDate(this.FirstminDate.getDate())
    // this.minDate=this.FirstminDate
  }

  // minDate:any
  constructor(private fb:FormBuilder){}

  onSubmit(){
    console.log(this.myForm.value);
  }
  get formData(){        
    return this.myForm.controls;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  upload(){

  }
  delete() {
    this.imageUrl = null;
  }
onUpload(event:any) {
  for(let file of event.files) {
      this.imageUrl.push(file);
  }

}
//date picker

onDateChange(event:any) {
  if (event) {
    // Set the minDate for the second calendar based on the selectedDate from the first calendar
    this.minDate = new Date(event);
  }
}
}

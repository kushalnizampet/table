import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../services/data.service';
describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let service: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports:[HttpClientTestingModule,
               MatSnackBarModule,
               MatIconModule,
               MatFormFieldModule,
               MatDatepickerModule,
               MatNativeDateModule,
                MatRadioModule,
                ReactiveFormsModule,
                MatTableModule,
                MatInputModule,
                MatFormFieldModule,
                BrowserAnimationsModule
              ],
      providers:[DatePipe]
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service=TestBed.inject(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name input invalid test case',()=>{
    let name = component.myform.controls['name'];
    expect(name.invalid).toBeTruthy();
    expect(name.untouched).toBeTruthy();
  });

  it('Father name input invalid test case',()=>{
    let fatherName = component.myform.controls['fatherName'];
    expect(fatherName.invalid).toBeTruthy();
    expect(fatherName.untouched).toBeTruthy();
  });

  it(' dob invalid test case',()=>{
    let dob = component.myform.controls['dob'];
    expect(dob.invalid).toBeTruthy();
    expect(dob.untouched).toBeTruthy();
  });

  it(' email invalid test case',()=>{
    let email = component.myform.controls['email'];
    expect(email.invalid).toBeTruthy();
    expect(email.untouched).toBeTruthy();
  });

  it(' food Type invalid test case',()=>{
    let foodType = component.myform.controls['foodType'];
    expect(foodType.invalid).toBeTruthy();
    expect(foodType.untouched).toBeTruthy();
  });

  it(' roomNumber invalid test case',()=>{
    let roomNumber = component.myform.controls['roomNumber'];
    expect(roomNumber.invalid).toBeTruthy();
    expect(roomNumber.untouched).toBeTruthy();
  });

  it(' age invalid test case',()=>{
    let age = component.myform.controls['age'];
    expect(age.invalid).toBeTruthy();
    expect(age.untouched).toBeTruthy();
  });

  it(' mobileNumber invalid test case',()=>{
    let mobileNumber = component.myform.controls['dob'];
    expect(mobileNumber.invalid).toBeTruthy();
    expect(mobileNumber.untouched).toBeTruthy();
  });

  it(' advance invalid test case',()=>{
    let advance = component.myform.controls['advance'];
    expect(advance.invalid).toBeTruthy();
    expect(advance.untouched).toBeTruthy();
  });

  it(' address invalid test case',()=>{
    let address = component.myform.controls['address'];
    expect(address.invalid).toBeTruthy();
    expect(address.untouched).toBeTruthy();
  });

  it(' city invalid test case',()=>{
    let city = component.myform.controls['city'];
    expect(city.invalid).toBeTruthy();
    expect(city.untouched).toBeTruthy();
  });
  
  //setting value and testing
  it(' name test case',()=>{
    let name = component.myform.controls['name'];
    name.setValue('kushal Nizampet');
    expect(name.valid).toBeTruthy();
    expect(name.value).toEqual('kushal Nizampet')
  });

  it(' father name test case',()=>{
    let fatherName = component.myform.controls['fatherName'];
    fatherName.setValue('kushal Nizampet');
    expect(fatherName.valid).toBeTruthy();
    expect(fatherName.value).toEqual('kushal Nizampet')
  });

  it(' email test case',()=>{
    let email = component.myform.controls['email'];
    email.setValue('nizampet@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(email.value).toEqual('nizampet@gmail.com')
  });

  it(' mobile Number test case',()=>{
    let mobileNumber = component.myform.controls['mobileNumber'];
    mobileNumber.setValue('9000235642');
    expect(mobileNumber.valid).toBeTruthy();
    expect(mobileNumber.value).toEqual('9000235642')
  });

  it('room Number test case',()=>{
    let roomNumber = component.myform.controls['roomNumber'];
    roomNumber.setValue('103');
    expect(roomNumber.valid).toBeTruthy();
    expect(roomNumber.value).toEqual('103')
  });

  
});

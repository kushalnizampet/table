import {DatePipe } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data.service';
import { ValidationsService } from '../services/validations.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  myform:FormGroup;
  foodType=['vegeterian','Non-Vegeterian']
  newHostelData : any;
  cDateAndTime: any;

  ngOnInit(){
    this.getDate();
    this.getProductData();
    this.myform.patchValue(this.data);

  }
  
  constructor(private datepipe : DatePipe,private snackbar:MatSnackBar,@Inject(MAT_DIALOG_DATA)  public data:any,private api:DataService,private validatorservice:ValidationsService,private dialogRef:MatDialogRef<DialogComponent>){
    this.myform = new FormGroup({
      name : new FormControl('',this.validatorservice.nameValidation()),
      fatherName : new FormControl('',this.validatorservice.nameValidation()),
      dob : new FormControl('',Validators.required),
      email : new FormControl('',this.validatorservice.emailValidation()),
      foodType : new FormControl('',Validators.required),
      roomNumber :new FormControl('',this.validatorservice.roomNumberValidation()),
      age : new FormControl('',Validators.required),
      mobileNumber :new FormControl('',this.validatorservice.mobileValidation()),
      advance : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required)
    })
    
  }
  

  getDate(){
    this.cDateAndTime = this.datepipe.transform(new Date(),'yyyy-MM-dd HH:mm:ss' );
  }

  getProductData(){
    this.api.getData().subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

  HostelData(Name:string,fName:string,Dob:string,Email:string,foodTYpe:string,roomNUmber:number,Age:number,mobileNUmber:number,Advance:number,Address:string,City:string){
    this.newHostelData={
      name : Name,
      fatherName : fName,
      dob : Dob,
      doj: this.cDateAndTime,
      email : Email,
      foodType : foodTYpe,
      roomNumber : roomNUmber,
      age : Age,
      mobileNumber : mobileNUmber,
      advance : Advance,
      address : Address,
      city : City
    }
    this.api.postData(this.newHostelData).subscribe(
      (data:any)=>{
        console.log(data);
        this.getProductData();
      }
    )
  }
  
  onSubmit(){
    if(this.data){
      //updateData()
      this.api.updateData(this.data.id,this.myform.value).subscribe(
        (result:any)=>{
          console.log(result);
          this.dialogRef.close(true);
          this.snackbar.open('data updated successfully',"ok",{duration:3000})
        }
      )
    }
    else{
        if(this.myform.value.name!=''&&this.myform.value.fatherName!=''&&this.myform.value.dob!=''&&this.myform.value.foodType!=''&&this.myform.value.roomNumber!=''&&this.myform.value.age!=''&&this.myform.value.mobileNumber!=''&&this.myform.value.advance!=''&&this.myform.value.address!=''&&this.myform.value.city!=''){
        this.HostelData(this.myform.value.name,this.myform.value.fatherName,this.myform.value.dob,this.myform.value.email,this.myform.value.foodType,this.myform.value.roomNumber,this.myform.value.age,this.myform.value.mobileNumber,this.myform.value.advance,this.myform.value.address,this.myform.value.city)
        this.snackbar.open("Your data has been added" , "ok",{duration:3000});
    }else{
      this.snackbar.open("Enter Details" , "ok",{duration:3000});
    }
    }
    
  }

}

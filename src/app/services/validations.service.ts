import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }
  nameValidation(){
    var name = [Validators.required,Validators.maxLength(15)]
    return name;
  }
  
  emailRegex = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  emailValidation(){
    var email = [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]
    return email
  }
  mobileValidation(){
    var mobile = [Validators.required,Validators.maxLength(10)]
    return mobile;
  }

  roomNumberValidation(){
    var room = [Validators.required,Validators.maxLength(3),Validators.minLength(3)]
    return room;
  }
}

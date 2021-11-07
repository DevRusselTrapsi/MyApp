import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm = this.fb.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    middlename: ['',Validators.required],
    username: ['',Validators.required],
    password: ['',Validators.required]
  });
  

  constructor(private fb: FormBuilder) { }
 

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signupForm.value)
  }
}

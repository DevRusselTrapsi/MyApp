import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = this.fb.group({

    username: ['',Validators.required],
    password: ['',Validators.required],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm)
    alert('Success!!');
  }
}

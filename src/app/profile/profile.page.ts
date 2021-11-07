import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormArray,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm = this.fb.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    age: ['',Validators.required],
    contact: ['',Validators.required],
    address: this.fb.group({
      province: ['',Validators.required], 
      barangay: ['',Validators.required],
      street: ['',Validators.required]
      
    })

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }
}

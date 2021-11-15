import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Homies';
  message = '';
  id = 1;
  fontColor = 'blue';
  constructor() {}
  
  sayMessage(){
    alert('Success!!');
  }

}

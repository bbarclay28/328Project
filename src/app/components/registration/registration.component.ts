import { Component} from '@angular/core';
import {Register} from '../../models/register.model'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent{

  register : Register;
  title = false;

  constructor(){
    this.register = new Register();
  }
    
}

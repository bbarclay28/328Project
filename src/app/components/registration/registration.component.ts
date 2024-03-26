import { Component} from '@angular/core';
import {register} from '../../models/register.model.js'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent{

  register : register;
  title = false;

  constructor(){
    this.register = new register();
  }
    
}

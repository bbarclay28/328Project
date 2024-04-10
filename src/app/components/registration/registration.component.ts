import { Component} from '@angular/core';
import {Register} from '../../models/register.model'
import { attendee } from 'src/app/models/attendee.model';
import { personType } from 'src/app/models/persontype.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent{

  register : Register;
  title = false;
  objects = personType.getAllPersonTypes();

  constructor(){
    this.register = new Register();
  }
    

  validateId() {
    return this.objects.find(x => x.isSelected === true);
  }
}

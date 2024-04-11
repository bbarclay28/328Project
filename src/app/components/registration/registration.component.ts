import { Component } from '@angular/core';
import { Register } from '../../models/register.model';
import { PersonType } from 'src/app/models/person-type.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent {
  register: Register;
  title = false;

  constructor() {
    this.register = new Register();
  }

  ngOnInit() {
    this.register.attendee.personTypes = PersonType.getAllPersonTypes();
  }

   validateId() {
    return this.register.attendee.personTypes.find((x) => x.id == "0")?.isSelected;
  }

  log() {
    console.log(this.register.attendee.personTypes);
  }
}

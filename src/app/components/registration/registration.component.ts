import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.model';
import { PersonType } from 'src/app/models/person-type.model';
import { session } from 'src/app/models/session.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent implements OnInit {

  register: Register = new Register();

  ngOnInit() {
    this.register.attendee.personTypes = PersonType.getAllPersonTypes();
    
  }

  isStudentSelected() {
    return this.register.attendee.personTypes.find((x) => x.id == '0')
      ?.isSelected;
  }


  employmentChanged() {
    this.register.attendee.employmentType = 0;
  }

  studentChanged() {
    if (
      this.register.attendee.personTypes.find((x) => x.id == '0')?.isSelected ==
      false
    ) {
      this.register.attendee.school = '';
    }
  }
  

  log() {
    console.log(this.register);
  }
}

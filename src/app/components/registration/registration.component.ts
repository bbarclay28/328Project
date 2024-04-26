import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.model';
import { PersonType } from 'src/app/models/person-type.model';
import { RegisterService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent implements OnInit {
  register: Register = new Register();
  data: any;

  ngOnInit() {
    this.register.attendee.personTypes = PersonType.getAllPersonTypes();
    this.registerService.getData().subscribe((data: any) => {
      this.data = data;
    });
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

  constructor(private registerService: RegisterService) {
  }

  submitData() {
    this.registerService.postData(this.register).subscribe((response) => {
      console.log(response);
    });
  }
}

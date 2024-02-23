import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {

  firstName: string = "";
  lastName: string = "";
  
}

import { Component} from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent{

//Declare variables for storage
firstName: string = '';
lastName: string = '';
fullName: string = '';
status: string = '';
fullTime: boolean = false;
partTime: boolean = false;
student: boolean = false;
//test: string = "";

//Method that outputs a string with stored variables when register button is clicked. Used for Testing
  onClickRegister(){
    this.fullName = "Your full name is " + this.firstName + " " + this.lastName
  }
}

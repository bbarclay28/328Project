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
email: string = ' ';
fullTime: boolean = false;
partTime: boolean = false;
student: boolean = false;
title: boolean = false;
sessionOneSelected: boolean = false;
selectedTimeSlotOne: boolean = true;
sessionTwoSelected: boolean = false;
selectedTimeSlotTwo: boolean = true;
timeSlot1: boolean = false;
timeSlot2: boolean = false;
timeSlot3: boolean = false;
test: string = "";

//Method that outputs a string with stored variables when register button is clicked. Used for Testing
  onClickRegister(){
    this.fullName = "Your full name is " + this.firstName + " " + this.lastName

    if(this.fullTime == true){
        this.test = "You are Full-Time";
    }
  }
  
}

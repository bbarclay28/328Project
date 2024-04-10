import { personType} from './persontype.model';
import {employmentType} from './employment.model';
import { session } from './session.model';
import { person } from './person.model';
import { attendee } from './attendee.model';

export class Register{

    //Fields 
    attendee: attendee
    sessionOne: session
    sessionTwo: session
    isAttendingDinner: boolean
    
    constructor (){
           this.attendee = new attendee();
           this.sessionOne = new session();
           this.sessionTwo = new session();
           this.isAttendingDinner = false;
    }

}
import { personType} from './person-type.model.js';
import { EmploymentStatus, jobType } from './employment.model.js';
import { session } from './session.model.js';

export class register{

    //Fields 
    firstName: string
    lastName: string
    email: string
    school: string;
    dinnerAttendance: boolean
    sessionOne: session
    sessionTwo: session
    employmentStatus: EmploymentStatus
    jobType: jobType
    personType: personType
    
    

    constructor (){
           this.firstName = "";
           this.lastName = "";
           this.email = "";
           this.dinnerAttendance = false;
           this.school = "";
           this.sessionOne = new session();
           this.sessionTwo = new session();
           this.personType = personType.faculty;
           this.jobType = jobType.fullTime;
           this.employmentStatus = new EmploymentStatus();

           
            
           
    }

}
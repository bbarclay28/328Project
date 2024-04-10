import {personType} from './persontype.model';
import {employmentType} from './employment.model';
import { session } from './session.model';
import { person } from './person.model';


export class attendee extends person{
    school: string
    isEmployed: boolean
    employmentType: employmentType
    
    

    constructor (){
        super()
        this.school = "";
        this.isEmployed = false; 
        this.employmentType = employmentType.unset;
        
 }
 
}

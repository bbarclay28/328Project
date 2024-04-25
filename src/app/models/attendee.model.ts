import {PersonType} from './person-type.model';
import {employmentType} from './employment.model';
import { person } from './person.model';


export class attendee extends person{
    school: string
    isEmployed: boolean
    employmentType: employmentType
    personTypes: PersonType[]
    

    constructor (){
        super()
        this.school = "";
        this.isEmployed = false; 
        this.employmentType = employmentType.unset;
        this.personTypes = [];
        
 }
 
}

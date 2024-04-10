import {personType} from './persontype.model';
import {employmentType} from './employment.model';
import { session } from './session.model';
import { person } from './person.model';


export class attendee extends person{
    school: string
    isEmployed: boolean
    employmentType: employmentType
    personType = personType;
    studentSelected: boolean = false;
    facultySelected: boolean = false;
    professionalSelected: boolean = false;
    

    constructor (){
        super()
        this.school = "";
        this.isEmployed = false; 
        this.employmentType = employmentType.unset;
 }
 checkboxChanged(option: personType, isChecked: boolean) {
    switch(option) {
      case personType.student:
        this.studentSelected = isChecked;
        break;
      case personType.faculty:
        this.facultySelected = isChecked;
        break;
      case personType.professional:
        this.professionalSelected = isChecked;
        break;
    }
 }
}

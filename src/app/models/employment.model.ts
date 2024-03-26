export class EmploymentStatus{
    isEmployed : boolean;
    employmentType : string;

    constructor (){
        this.isEmployed = false;
        this.employmentType  = "";
    }
}

export enum jobType{
    fullTime = 0,
    partTime = 1
}
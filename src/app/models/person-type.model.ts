export class PersonType {
 
  id: string;
  title: string;
  isSelected: boolean;

  constructor() {
    this.id = '';
    this.title = '';
    this.isSelected = false;
  }

  static getAllPersonTypes(): PersonType[] {
    return [
      { id: '0', title: 'Student', isSelected: false },
      { id: '1', title: 'Faculty', isSelected: false },
      { id: '2', title: 'Professional', isSelected: false },
    ];
  }
 
}

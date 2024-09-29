 export class EmployeeModel{
     empId: number;
     name: string;
     city: string;
     state: string;
     emialId: string;
     contactNo: string;
     address: string;
     pinCode: string;

     constructor(){
         this.empId = 1;
         this.name = '';
         this.city = '';
         this.state = '';
         this.emialId = '';
         this.contactNo = '';
         this.address = '';
         this.pinCode = ''; 
         
     }

 }
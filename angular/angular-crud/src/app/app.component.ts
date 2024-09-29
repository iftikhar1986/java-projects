import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  emplyeeForm: FormGroup = new FormGroup({});
  
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = []; 

  constructor() {
    this.createForm();
    debugger;
    const oldData = localStorage.getItem('EmpData');
    if(oldData!= null ){
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }
  }
   
  createForm() {
    this.emplyeeForm = new FormGroup({
        empId : new FormControl(this.employeeObj.empId ),
        name : new FormControl(this.employeeObj.name , [Validators.required]),
        city : new FormControl(this.employeeObj.city ),
        address : new FormControl(this.employeeObj.address ),
        contactNo : new FormControl(this.employeeObj.contactNo ),
        emialId  : new FormControl(this.employeeObj.emialId ),
        pinCode : new FormControl(this.employeeObj.pinCode,[Validators.required] ),
        state : new FormControl(this.employeeObj.state ),
    });
  }

  onSave() {
    debugger;
    // this.employeeObj = this.emplyeeForm.value;
    // console.log(this.employeeObj);
    const oldData = localStorage.getItem('EmpData');
    if(oldData!= null ){
      const parseData = JSON.parse(oldData);
      this.emplyeeForm.controls['empId'].setValue(parseData.length+1);
      this.employeeList.unshift(this.emplyeeForm.value);
      } else {
        this.employeeList.unshift(this.emplyeeForm.value);

      }
      localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
      this.employeeObj = new EmployeeModel();
      this.createForm();   
  }
  onEdit(item: EmployeeModel) {
    this.employeeObj = item;
    this.createForm();
  }

  onUpdate(){
     const record = this.employeeList.find(m => m.empId == this.emplyeeForm.controls['empId'].value);
     if(record!= undefined){
      record.name = this.emplyeeForm.controls['name'].value;
      record.city = this.emplyeeForm.controls['city'].value;
      record.address = this.emplyeeForm.controls['address'].value;
      record.contactNo = this.emplyeeForm.controls['contactNo'].value;
      record.emialId = this.emplyeeForm.controls['emialId'].value;
  }
  localStorage.setItem('EmpData', JSON.stringify(this.employeeList));   
  this.employeeObj = new EmployeeModel();
  this.createForm();
} 

// onDelete(item: EmployeeModel) {
//   const recordIndex = this.employeeList.findIndex(m => m.empId == item.empId);
//   this.employeeList.splice(recordIndex,1);
//   localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
//   this.employeeObj = new EmployeeModel();
//   this.createForm();
// }


  onDelete(id: number) {
    const isDelete = confirm('Are you sure to delete');
    if (isDelete) {
      const index = this.employeeList.findIndex(m => m.empId == id);
      this.employeeList.splice (index,1 )
    
  }
}
}

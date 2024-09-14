import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  name = "John Doe";
  age = 30;
  address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  };
  }




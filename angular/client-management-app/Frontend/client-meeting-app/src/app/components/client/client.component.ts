import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private http: HttpClient) {}

  createClient() {
    const clientData = {
      name: this.name,
      email: this.email,
      address: this.address,
      password: this.password
    };
    this.http.post('http://localhost:3000/clients', clientData)
      .subscribe(response => {
        console.log('Client created:', response);
      });
  }

   // Example method to get clients
   getClients() {
    this.http.get('/api/clients').subscribe((clients) => {
      console.log(clients);
    });
  }
}
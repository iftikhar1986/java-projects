import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  createClient(clientData: any): Observable<any> {
    return this.http.post(this.apiUrl, clientData);
  }
}

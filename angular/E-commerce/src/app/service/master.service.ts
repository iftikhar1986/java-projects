import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string = 'https://freeapi.miniprojectideas.com/api/BigBasket';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl + "GetAllProducts");
  }
}

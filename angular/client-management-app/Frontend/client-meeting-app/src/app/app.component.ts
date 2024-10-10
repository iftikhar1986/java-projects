import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MainComponent, HttpClientModule],  // Import HttpClientModule here
})
export class AppComponent {
  constructor(private http: HttpClient) {}

}

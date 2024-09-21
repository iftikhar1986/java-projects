import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { reverse } from 'dns';
import { ReversePipe } from './custom/reverse.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, HomeComponent, CommonModule, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newstandalone-Angular 18';
  subtitle = 'For moi';
  todayDate = new Date(); //todayDate = new Date('2023-05-01');
  salary = 1000;
}

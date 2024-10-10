import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from '../client/client.component';
import { MeetingComponent } from '../meeting/meeting.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ClientComponent, MeetingComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {}

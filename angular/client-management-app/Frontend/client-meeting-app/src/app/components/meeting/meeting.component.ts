import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeetingService } from '../../services/meeting.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  meetingTopic: string = '';
  numberOfPeople: number = 1;
  startTime: string = '';
  constructor(private http: HttpClient) {}

  scheduleMeeting() {
    const meetingData = {
      agenda: this.meetingTopic,
      client_id: this.numberOfPeople,  // Assuming client_id refers to number of people for simplicity
      date: this.startTime
    };
    this.http.post('http://localhost:3000/meetings', meetingData)
      .subscribe(response => {
        console.log('Meeting scheduled:', response);
      });
  }
}

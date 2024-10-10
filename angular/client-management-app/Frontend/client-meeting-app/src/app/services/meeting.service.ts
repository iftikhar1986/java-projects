import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private apiUrl = 'http://localhost:3000/meetings';

  constructor(private http: HttpClient) {}

  scheduleMeeting(meetingData: any): Observable<any> {
    return this.http.post(this.apiUrl, meetingData);
  }
}

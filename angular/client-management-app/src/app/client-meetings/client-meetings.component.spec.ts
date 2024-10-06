import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeetingsComponent } from './client-meetings.component';

describe('ClientMeetingsComponent', () => {
  let component: ClientMeetingsComponent;
  let fixture: ComponentFixture<ClientMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

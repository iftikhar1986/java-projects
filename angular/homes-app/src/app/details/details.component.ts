import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="listing-description">
      <img class="listing-photo" [src]="housingLocation?.photo"/>
      <section>
        <h2 class="listing-heading">{{housingLocation?.name}}</h2> 
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}} </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location </h2>
      </section>
    </article> 
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute); 
  housingService  = inject(HousingService);
  housingLocationId: HousingLocation | undefined;
  constructor() {
    const  housingLocationId = this.route.snapshot.params['id'];
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}

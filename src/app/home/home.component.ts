import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  boatsDetails: any[] = [];
  allBoatsDetails: any[] = [];
  selectedCountry: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBoatsDetails().subscribe((data: any[]) => {
      this.boatsDetails = data.map((boat) => {
        boat.port = JSON.parse(boat.port)[1];

        const availabilityObject = JSON.parse(boat.availability);

        const firstAvailabilityKey = Object.keys(availabilityObject)[0];
        const firstAvailabilityValue = availabilityObject[firstAvailabilityKey];

        boat.formattedAvailability = `${firstAvailabilityKey} - ${firstAvailabilityValue}`;
        return boat;
      });
      this.allBoatsDetails = [...this.boatsDetails];
    });
  }

  filterByCountry(country: string) {
    if (this.selectedCountry === country) {
      this.selectedCountry = null;
      this.boatsDetails = [...this.allBoatsDetails];
    } else {
      this.selectedCountry = country;
      this.boatsDetails = this.allBoatsDetails.filter(
        (boat) => boat.country === country,
      );
    }
  }
}

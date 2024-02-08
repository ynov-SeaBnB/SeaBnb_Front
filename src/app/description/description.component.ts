import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  boatId: string | null | undefined;
  minDate: string;
  selectedDate: string;
  availableSlots: { label: string; value: string }[] = [];
  boatsDetails: any[] = [];
  allBoatsDetails: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    this.minDate = currentDate.toISOString().substring(0, 10);
    this.selectedDate = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.boatId = params.get('id');
      this.apiService.getBoatsDetails().subscribe((data: any[]) => {
        this.boatsDetails = data.map((boat) => {
          boat.city = JSON.parse(boat.port)[0];

          boat.port = JSON.parse(boat.port)[1];

          const availabilityObject = JSON.parse(boat.availability);

          const firstAvailabilityKey = Object.keys(availabilityObject)[0];
          const firstAvailabilityValue =
            availabilityObject[firstAvailabilityKey];

          boat.formattedAvailability = `${firstAvailabilityKey} - ${firstAvailabilityValue}`;
          return boat;
        });

        this.allBoatsDetails = [...this.boatsDetails];
      });
    });
  }

  onDateChange(date: string): void {
    this.selectedDate = date;
    this.availableSlots = this.getAvailableSlotsForDate(date);
  }

  getAvailableSlotsForDate(date: string): { label: string; value: string }[] {
    if (date === '2023-12-23') {
      return [
        { label: '12h-14h', value: '12:00-14:00' },
        { label: '16h-18h', value: '16:00-18:00' },
      ];
    } else {
      return [];
    }
  }

  onSubmit(f: NgForm): void {
    console.log(f.value);
  }
}

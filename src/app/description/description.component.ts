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
  boatsDetails: any;
  allBoatsDetails: any[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {
    this.minDate = new Date().toISOString().split('T')[0];
    this.selectedDate = this.minDate;
  }

  ngOnInit(): void {
    this.boatId = this.route.snapshot.paramMap.get('id');
    this.apiService.getBoatDetails(this.boatId).subscribe((boatDetails) => {
      this.boatsDetails = boatDetails;
      console.log(this.boatsDetails);
    });
    this.apiService.getBoatsDetails().subscribe((allBoatsDetails) => {
      this.allBoatsDetails = allBoatsDetails;
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

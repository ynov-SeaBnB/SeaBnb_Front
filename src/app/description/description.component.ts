import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  minDate: string;
  selectedDate: string;
  availableSlots: { label: string; value: string }[] = [];

  constructor() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    this.minDate = currentDate.toISOString().substring(0, 10);
    this.selectedDate = '';
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
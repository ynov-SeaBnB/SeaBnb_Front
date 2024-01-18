import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  boatsDetails: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBoatsDetails().subscribe((data: any[]) => {
      this.boatsDetails = data;
      console.log(this.boatsDetails);
    });
  }
}

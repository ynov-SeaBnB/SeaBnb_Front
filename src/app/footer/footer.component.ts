import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearElement) {
      currentYearElement.textContent = currentYear.toString();
    }
  }

}

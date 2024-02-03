import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showModal: boolean = false;
  isScreenNineHundred: boolean = true;
  isScreenSevenHundred: boolean = true;

  @HostListener('window:resize')
  onResize() {
    this.isScreenNineHundred = window.innerWidth < 900;
    this.isScreenSevenHundred = window.innerWidth < 750;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  isHomePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const currentUrl = this.router.url;
    this.isHomePage = currentUrl === '/home' || currentUrl === '/description';
  }
}

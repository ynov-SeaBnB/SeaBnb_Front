import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtenez l'URL actuelle
    const currentUrl = this.router.url;

    // Vérifiez si c'est la page d'accueil
    this.isHomePage = currentUrl === '/home';
    this.isHomePage = currentUrl === '/description';
  }
}

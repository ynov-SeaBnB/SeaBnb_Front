import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent {
  url: any = '';
  showForm: boolean = true;
  userProfil: any = null;

  constructor(private ApiService: ApiService) {
    this.ApiService.getProfil().subscribe((data: any) => {
      console.log(data);
      this.userProfil = data;
    });
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed

        //@ts-ignore
        this.url = event.target.result;
      };
    }
  }

  toggleForms() {
    this.showForm = !this.showForm;
  }
}

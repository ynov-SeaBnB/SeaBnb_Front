import { Component, numberAttribute } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  url:any = '';
  
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      
        //@ts-ignore
        this.url = event.target.result;
      }
    }
  }
  showForm: boolean = true;
    toggleForms(){
      this.showForm =!this.showForm;
    }
}

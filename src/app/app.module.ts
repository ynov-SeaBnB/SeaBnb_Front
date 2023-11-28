import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { DescriptionComponent } from './description/description.component';
import { OwnerComponent } from './owner/owner.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    DescriptionComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroUsers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser, heroLockClosed, heroEnvelope, heroLanguage, heroBars3, heroUserCircle } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroUser, heroEnvelope, heroLockClosed, heroLanguage, heroBars3, heroUserCircle }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

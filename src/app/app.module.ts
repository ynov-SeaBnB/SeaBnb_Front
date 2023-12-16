import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser, heroLockClosed, heroEnvelope, heroLanguage, heroBars3, heroUserCircle } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { BoatsComponent } from './boats/boats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    BoatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroUser, heroEnvelope, heroLockClosed, heroLanguage, heroBars3, heroUserCircle, heroStarSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

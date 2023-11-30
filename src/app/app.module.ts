import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { NgIconsModule } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';

import {heroUser, heroLockClosed, heroEnvelope, heroLanguage} from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroUser, heroEnvelope, heroLockClosed, heroLanguage}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

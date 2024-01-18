import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  heroBars3,
  heroUserCircle,
  heroUser,
  heroLockClosed,
  heroEnvelope,
  heroLanguage,
  heroCamera,
  heroChevronRight,
  heroArrowUturnLeft,
  heroTrash,
} from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { BoatsComponent } from './boats/boats.component';
import { DescriptionComponent } from './description/description.component';
import { OwnerComponent } from './owner/owner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    LoginComponent,
    RegisterComponent,
    BoatsComponent,
    DescriptionComponent,
    OwnerComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({
      heroUser,
      heroEnvelope,
      heroLockClosed,
      heroBars3,
      heroUserCircle,
      heroStarSolid,
      heroLanguage,
      heroCamera,
      heroChevronRight,
      heroArrowUturnLeft,
      heroTrash,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

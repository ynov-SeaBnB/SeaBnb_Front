import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { OwnerComponent } from './owner/owner.component';
import { DescriptionComponent } from './description/description.component';

import { OwnerComponent } from './owner/owner.component';
import { DescriptionComponent } from './description/description.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'profil', component:ProfilComponent},
  {path: 'owner', component:OwnerComponent},
  {path: 'description', component:DescriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

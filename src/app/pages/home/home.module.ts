import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomeContentComponent } from './components/home-content.component';
import { HomeHeaderComponent } from './components/home-header.component';
import { HomePageComponent } from './containers/home-page.component';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
    HomePageComponent,
    HomeHeaderComponent,
    HomeContentComponent,
  ],
})
export class HomeModule { }

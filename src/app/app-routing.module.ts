import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }	from './pages/home/home-page.component';
import { ContactPageComponent }	from './pages/contact/contact-page.component';
import { NewsPageComponent }	from './pages/news/news-page.component';
import { AboutPageComponent }	from './pages/about/about-page.component';
import { BookingPageComponent }	from './pages/booking/booking-page.component';
import { WooploopPageComponent }	from './pages/wooploop/wooploop-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'wooploop', component: WooploopPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'booking', component: BookingPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
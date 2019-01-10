import { NgModule }             	from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

import { HomePageComponent }		  from './pages/home/home-page.component';
import { ContactPageComponent }		from './pages/contact/contact-page.component';
import { NewsPageComponent }		  from './pages/news/news-page.component';
import { AboutPageComponent }     from './pages/about/about-page.component';
import { BookingPageComponent }		from './pages/booking/booking-page.component';
import { BookingProPageComponent }   from './pages/booking-pro/booking-pro-page.component';
import { BookingCustomerPageComponent }   from './pages/booking-customer/booking-customer-page.component';
import { BusinessPageComponent }	from './pages/business/business-page.component';
import { CoworkPageComponent }    from './pages/cowork/cowork-page.component';
import { PricingPageComponent }   from './pages/pricing/pricing-page.component';
import { ClubPageComponent }      from './pages/club/club-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: {animation: 'HomePage'} },
  //{ path: 'home', component: CoworkPageComponent, data: {animation: 'HomePage'} },
  { path: 'contact', component: ContactPageComponent, data: {animation: 'ContactPage'} },
  { path: 'news', component: NewsPageComponent, data: {animation: 'NewsPage'} },
  { path: 'business', component: BusinessPageComponent, data: {animation: 'BusinessPage'} },
  { path: 'about', component: AboutPageComponent, data: {animation: 'AboutPage'} },
  { path: 'booking', component: BookingPageComponent, data: {animation: 'BookingPage'} },
  { path: 'booking/pro', component: BookingProPageComponent, data: {animation: 'BookingProPage'} },
  { path: 'booking/customer', component: BookingCustomerPageComponent, data: {animation: 'BookingCustomerPage'} },
  { path: 'pricing', component: PricingPageComponent, data: {animation: 'PricingPage'} },
  { path: 'club', component: ClubPageComponent, data: {animation: 'ClubPage'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      //anchorScrolling: 'enabled',
      //scrollOffset: [0, 64]
    }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
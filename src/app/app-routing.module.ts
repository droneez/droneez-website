import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { NewsPageComponent } from './pages/news/news-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { BookingPageComponent } from './pages/booking/booking-page.component';
import { BookingProPageComponent } from './pages/booking-pro/booking-pro-page.component';
import { BookingCustomerPageComponent } from './pages/booking-customer/booking-customer-page.component';
import { BusinessPageComponent } from './pages/business/business-page.component';
import { CoworkPageComponent } from './pages/cowork/cowork-page.component';
import { PricingPageComponent } from './pages/pricing/pricing-page.component';
import { ClubPageComponent } from './pages/club/club-page.component';
import { LayoutArticleComponent } from './articles/layout-article.component';
import { CheckoutPageComponent } from './pages/checkout/checkout-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, data: { animation: 'HomePage' } },
    { path: 'contact', component: ContactPageComponent, data: { animation: 'ContactPage' } },
    { path: 'news', component: NewsPageComponent, data: { animation: 'NewsPage' } },
    { path: 'business', component: BusinessPageComponent, data: { animation: 'BusinessPage' } },
    { path: 'about', component: AboutPageComponent, data: { animation: 'AboutPage' } },
    { path: 'booking', component: BookingPageComponent, data: { animation: 'BookingPage' } },
    { path: 'booking/pro', component: BookingProPageComponent, data: { animation: 'BookingProPage' } },
    { path: 'booking/pro/:category', component: BookingProPageComponent, data: { animation: 'BookingProPage' } },
    { path: 'booking/customer', component: BookingCustomerPageComponent, data: { animation: 'BookingCustomerPage' } },
    { path: 'booking/customer/:category', component: BookingCustomerPageComponent, data: { animation: 'BookingCustomerPage' } },
    { path: 'pricing', component: PricingPageComponent, data: { animation: 'PricingPage' } },
    { path: 'club', component: ClubPageComponent, data: { animation: 'ClubPage' } },
    { path: 'article/:title', component: LayoutArticleComponent, data: { animation: 'LayoutArticle' } },
    { path: 'checkout', component: CheckoutPageComponent, data: { animation: 'CheckoutPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

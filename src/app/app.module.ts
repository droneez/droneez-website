/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { IgxCalendarModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgScrollbarModule } from 'ngx-scrollbar';

/* Services */
import { WINDOW_PROVIDERS } from './services/window.service';

/* Variables globales */
import { Globals } from './globals';

/* Material */
import { 
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule, 
    MatTableModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
} from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LegalComponent } from './components/legal/legal.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { CalendarComponent } from './components/calendar/calendar.component';

/* Pages */

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
import { CheckoutPageComponent } from './pages/checkout/checkout-page.component';

/* Articles */
import { LayoutArticleComponent } from './articles/layout-article.component';

/* Directives */
import { AnimImgLoadDirective } from './directives/anim-img-load.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { Template3Component } from './articles/templates/template3/template3.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        HomePageComponent,
        ContactPageComponent,
        NewsPageComponent,
        AboutPageComponent,
        BookingPageComponent,
        BookingProPageComponent,
        BookingCustomerPageComponent,
        BusinessPageComponent,
        AnimImgLoadDirective,
        CoworkPageComponent,
        ContactFormComponent,
        LegalComponent,
        ShoppingBagComponent,
        PricingPageComponent,
        ClubPageComponent,
        CalendarComponent,
        LayoutArticleComponent,
        CheckoutPageComponent,
        SafeHtmlPipe,
        Template3Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatCheckboxModule,
        MatStepperModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        CollapseModule.forRoot(),
        ScrollToModule.forRoot(),
        ModalModule.forRoot(),
        BrowserAnimationsModule,
        IgxCalendarModule,
        CdkStepperModule,
        NgScrollbarModule
    ],
    providers: [
        WINDOW_PROVIDERS, 
        Globals,
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

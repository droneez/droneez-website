/* Modules */
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CollapseModule }   from 'ngx-bootstrap/collapse';
import { ScrollToModule }   from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Services */
import { WINDOW_PROVIDERS } from './services/window.service';

/* Variables globales */
import { Globals }          from './globals';

/* Material */
import { MatButtonModule } from '@angular/material';

/* Components */
import { AppComponent }             from './app.component';
import { HeaderComponent }          from './components/header/header.component';
import { FooterComponent }          from './components/footer/footer.component';
import { LogoComponent }            from './components/logo/logo.component';

import { HomePageComponent }        from './pages/home/home-page.component';
import { ContactPageComponent }     from './pages/contact/contact-page.component';
import { NewsPageComponent }        from './pages/news/news-page.component';
import { AboutPageComponent }       from './pages/about/about-page.component';
import { BookingPageComponent }     from './pages/booking/booking-page.component';
import { BusinessPageComponent }    from './pages/business/business-page.component';

/* Directives */
import { AnimImgLoadDirective }     from './directives/anim-img-load.directive';

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
        BusinessPageComponent,
        AnimImgLoadDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatButtonModule,
        CollapseModule.forRoot(),
        ScrollToModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [WINDOW_PROVIDERS, Globals],
    bootstrap: [AppComponent]
})
export class AppModule { }

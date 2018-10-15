import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { WINDOW_PROVIDERS } from "./services/window.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { NewsPageComponent } from './pages/news/news-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { BookingPageComponent } from './pages/booking/booking-page.component';
import { WooploopPageComponent } from './pages/wooploop/wooploop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    NewsPageComponent,
    AboutPageComponent,
    BookingPageComponent,
    WooploopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

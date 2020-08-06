import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';

import { CarouselComponent } from './carousel/carousel.component';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NgxImageZoomModule } from 'ngx-image-zoom';

import {ProductsService} from './services/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxImageZoomModule,
    BreadcrumbsModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot()
    // FontAwesomeModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

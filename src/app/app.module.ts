import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PhotosComponent,
    PageNotFoundComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    PhotoGalleryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

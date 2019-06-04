import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxGalleryModule } from 'ngx-gallery';
import { ContactComponent } from './contact/contact.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PhotosComponent,
    PageNotFoundComponent,
    ContactComponent,
    PhotoGalleryComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    NgxGalleryModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

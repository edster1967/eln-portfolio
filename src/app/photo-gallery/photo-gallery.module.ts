import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoGalleryService } from './photo-gallery.service';
import { NgxGalleryModule } from 'ngx-gallery';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxGalleryModule
  ],
  providers: [
    PhotoGalleryService
  ]
})
export class PhotoGalleryModule { }

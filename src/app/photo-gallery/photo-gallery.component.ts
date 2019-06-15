import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PhotoGalleryService } from './photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryTitle: string;
  constructor(private galleryService: PhotoGalleryService) { }

  ngOnInit() {

    this.galleryTitle = 'Antelope Canyon Gallery';

    this.galleryOptions = [
      {
        width: '800px',
        height: '600px',
        thumbnailsColumns: 3
      },
      {
        breakpoint: 500,
        width: '300px',
        height: '300px',
        thumbnailsColumns: 3
      }
    ];

    this.galleryImages = this.galleryService.getACGalleryImages();
  }

}

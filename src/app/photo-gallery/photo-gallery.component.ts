import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
      // breakpoint: 500,
        thumbnailsColumns: 3,
        imageSize: 'contain',
        imageAnimation: NgxGalleryAnimation.Slide
    }
    ];
    this.galleryImages = [
      {
        small: 'assets/img/gc_eln.jpg',
        medium: 'assets/img/gc_eln.jpg',
        big: 'assets/img/gc_eln.jpg'
      },
      {
        small: 'assets/img/redrock_eln.jpg',
        medium: 'assets/img/redrock_eln.jpg',
        big: 'assets/img/redrock_eln.jpg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { PhotoGalleryService } from './photo-gallery.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryTitle: string;
  galleryName: string;

  constructor(private galleryService: PhotoGalleryService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.galleryName = params.get('gallery');
    });

    console.log('this is the value of gallery passed: ' + this.galleryName);


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

    if (this.galleryName === 'antelope-canyon') {
      this.galleryTitle = 'Antelope Canyon Gallery';
      this.galleryImages = this.galleryService.getACGalleryImages();
    } else if (this.galleryName === 'monument-valley') {
      this.galleryTitle = 'Monument Valley Gallery';
      this.galleryImages = this.galleryService.getMVGalleryImages();
    } else if (this.galleryName === 'sedona') {
      this.galleryTitle = 'Sedona Gallery';
      this.galleryImages = this.galleryService.getSedonaGalleryImages();
    }

  }

}

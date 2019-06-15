import { NgxGalleryImage } from 'ngx-gallery';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoGalleryService {
  private galleryImages: NgxGalleryImage[];


  getACGalleryImages() {
    this.galleryImages = [
          {
              small: 'assets/img/ac/ac_eln_1.jpg',
              medium: 'assets/img/ac/ac_eln_1.jpg',
              big: 'assets/img/ac/ac_eln_1.jpg'
            },
            {
              small: 'assets/img/ac/ac_eln_2.jpg',
              medium: 'assets/img/ac/ac_eln_2.jpg',
              big: 'assets/img/ac/ac_eln_2.jpg'
            },
            {
              small: 'assets/img/ac/ac_eln_3.jpg',
              medium: 'assets/img/ac/ac_eln_3.jpg',
              big: 'assets/img/ac/ac_eln_3.jpg'
            },
            {
              small: 'assets/img/ac/ac_eln_4.jpg',
              medium: 'assets/img/ac/ac_eln_4.jpg',
              big: 'assets/img/ac/ac_eln_4.jpg'
            },
            {
              small: 'assets/img/ac/ac_eln_5.jpg',
              medium: 'assets/img/ac/ac_eln_5.jpg',
              big: 'assets/img/ac/ac_eln_5.jpg'
            },
            {
              small: 'assets/img/ac/ac_eln_6.jpg',
              medium: 'assets/img/ac/ac_eln_6.jpg',
              big: 'assets/img/ac/ac_eln_6.jpg'
            }
      ];
    return this.galleryImages;
  }

}

import * as ngxGallery from 'ngx-gallery';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoGalleryService {
  private galleryImages: ngxGallery.NgxGalleryImage[];


  getACGalleryImages() {
    this.galleryImages = [
      {
        small: 'assets/img/ac/ac_eln_1.jpg',
        medium: 'assets/img/ac/ac_eln_1.jpg',
        big: 'assets/img/ac/ac_eln_big_1.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_2.jpg',
        medium: 'assets/img/ac/ac_eln_2.jpg',
        big: 'assets/img/ac/ac_eln_big_2.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_3.jpg',
        medium: 'assets/img/ac/ac_eln_3.jpg',
        big: 'assets/img/ac/ac_eln_big_3.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_4.jpg',
        medium: 'assets/img/ac/ac_eln_4.jpg',
        big: 'assets/img/ac/ac_eln_big_4.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_5.jpg',
        medium: 'assets/img/ac/ac_eln_5.jpg',
        big: 'assets/img/ac/ac_eln_big_5.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_6.jpg',
        medium: 'assets/img/ac/ac_eln_6.jpg',
        big: 'assets/img/ac/ac_eln_big_6.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_7.jpg',
        medium: 'assets/img/ac/ac_eln_7.jpg',
        big: 'assets/img/ac/ac_eln_big_7.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_8.jpg',
        medium: 'assets/img/ac/ac_eln_8.jpg',
        big: 'assets/img/ac/ac_eln_big_8.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_9.jpg',
        medium: 'assets/img/ac/ac_eln_9.jpg',
        big: 'assets/img/ac/ac_eln_9.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_10.jpg',
        medium: 'assets/img/ac/ac_eln_10.jpg',
        big: 'assets/img/ac/ac_eln_big_10.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_11.jpg',
        medium: 'assets/img/ac/ac_eln_11.jpg',
        big: 'assets/img/ac/ac_eln_big_11.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_12.jpg',
        medium: 'assets/img/ac/ac_eln_12.jpg',
        big: 'assets/img/ac/ac_eln_big_12.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_13.jpg',
        medium: 'assets/img/ac/ac_eln_13.jpg',
        big: 'assets/img/ac/ac_eln_big_13.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_14.jpg',
        medium: 'assets/img/ac/ac_eln_14.jpg',
        big: 'assets/img/ac/ac_eln_big_14.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_15.jpg',
        medium: 'assets/img/ac/ac_eln_15.jpg',
        big: 'assets/img/ac/ac_eln_big_15.jpg'
      },
      {
        small: 'assets/img/ac/ac_eln_16.jpg',
        medium: 'assets/img/ac/ac_eln_16.jpg',
        big: 'assets/img/ac/ac_eln_big_16.jpg'
      },

    ];
    return this.galleryImages;
  }

  getMVGalleryImages() {
    this.galleryImages = [

      {
        small: 'assets/img/mv/mv_eln_6.jpg',
        medium: 'assets/img/mv/mv_eln_6.jpg',
        big: 'assets/img/mv/mv_eln_big_6.jpg'
      }, {
        small: 'assets/img/mv/mv_eln_1.jpg',
        medium: 'assets/img/mv/mv_eln_1.jpg',
        big: 'assets/img/mv/mv_eln_big_1.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_2.jpg',
        medium: 'assets/img/mv/mv_eln_2.jpg',
        big: 'assets/img/mv/mv_eln_big_2.jpg'
      },

      {
        small: 'assets/img/mv/mv_eln_4.jpg',
        medium: 'assets/img/mv/mv_eln_4.jpg',
        big: 'assets/img/mv/mv_eln_big_4.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_5.jpg',
        medium: 'assets/img/mv/mv_eln_5.jpg',
        big: 'assets/img/mv/mv_eln_big_5.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_3.jpg',
        medium: 'assets/img/mv/mv_eln_3.jpg',
        big: 'assets/img/mv/mv_eln_big_3.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_7.jpg',
        medium: 'assets/img/mv/mv_eln_7.jpg',
        big: 'assets/img/mv/mv_eln_big_7.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_8.jpg',
        medium: 'assets/img/mv/mv_eln_8.jpg',
        big: 'assets/img/mv/mv_eln_big_8.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_9.jpg',
        medium: 'assets/img/mv/mv_eln_9.jpg',
        big: 'assets/img/mv/mv_eln_big_9.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_10.jpg',
        medium: 'assets/img/mv/mv_eln_10.jpg',
        big: 'assets/img/mv/mv_eln_big_10.jpg'
      },
      {
        small: 'assets/img/mv/mv_eln_11.jpg',
        medium: 'assets/img/mv/mv_eln_11.jpg',
        big: 'assets/img/mv/mv_eln_big_11.jpg'
      }

    ];
    return this.galleryImages;
  }

  getSedonaGalleryImages() {
    this.galleryImages = [
      {
        small: 'assets/img/sedona/sedona_eln_3.jpg',
        medium: 'assets/img/sedona/sedona_eln_3.jpg',
        big: 'assets/img/sedona/sedona_eln_big_3.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_1.jpg',
        medium: 'assets/img/sedona/sedona_eln_1.jpg',
        big: 'assets/img/sedona/sedona_eln_big_1.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_2.jpg',
        medium: 'assets/img/sedona/sedona_eln_2.jpg',
        big: 'assets/img/sedona/sedona_eln_big_2.jpg'
      },

      {
        small: 'assets/img/sedona/sedona_eln_4.jpg',
        medium: 'assets/img/sedona/sedona_eln_4.jpg',
        big: 'assets/img/sedona/sedona_eln_big_4.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_5.jpg',
        medium: 'assets/img/sedona/sedona_eln_5.jpg',
        big: 'assets/img/sedona/sedona_eln_big_5.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_6.jpg',
        medium: 'assets/img/sedona/sedona_eln_6.jpg',
        big: 'assets/img/sedona/sedona_eln_big_6.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_7.jpg',
        medium: 'assets/img/sedona/sedona_eln_7.jpg',
        big: 'assets/img/sedona/sedona_eln_big_7.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_8.jpg',
        medium: 'assets/img/sedona/sedona_eln_8.jpg',
        big: 'assets/img/sedona/sedona_eln_big_8.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_9.jpg',
        medium: 'assets/img/sedona/sedona_eln_9.jpg',
        big: 'assets/img/sedona/sedona_eln_big_9.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_10.jpg',
        medium: 'assets/img/sedona/sedona_eln_10.jpg',
        big: 'assets/img/sedona/sedona_eln_big_9.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_11.jpg',
        medium: 'assets/img/sedona/sedona_eln_11.jpg',
        big: 'assets/img/sedona/sedona_eln_big_11.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_12.jpg',
        medium: 'assets/img/sedona/sedona_eln_12.jpg',
        big: 'assets/img/sedona/sedona_eln_big_12.jpg'
      },
      {
        small: 'assets/img/sedona/sedona_eln_13.jpg',
        medium: 'assets/img/sedona/sedona_eln_13.jpg',
        big: 'assets/img/sedona/sedona_eln_big_13.jpg'
      }

    ];
    return this.galleryImages;
  }

}

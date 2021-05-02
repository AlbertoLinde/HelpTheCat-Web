import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyimage'
})
export class EmptyimagePipe implements PipeTransform {

  transform(image: any): string {
    console.log("IMAGE" + image);
    if (!image) {
      return '../assets/images/default_image.png';
    } else {
      return image;
    }
  }

}

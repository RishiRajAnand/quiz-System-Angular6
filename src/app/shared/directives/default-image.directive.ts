import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[errorImageSrc]'
})
export class DefaultImageDirective {
  @Input('errorImageSrc') errorImageSrc: string;
  defaultImg = './assets/images/no_image_available.jpg';
  constructor(private elRef: ElementRef) {}
  // Listener for error event and change the src to deafult
  @HostListener('error')
  onError() {
    this.elRef.nativeElement.src = this.errorImageSrc
      ? this.errorImageSrc
      : this.defaultImg;
  }
}

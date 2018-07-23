import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})

// import {Directive, Input, HostListener} from '@angular/core';
// import {NgForm} from '@angular/forms';

// @Directive({ selector: '[scrollToFirstInvalid]' })
// export class ScrollToFirstInvalidDirective {
//   @Input('scrollToFirstInvalid') form: NgForm;
//   constructor() {
//   }
//   @HostListener('submit', ['$event'])
//   onSubmit(event) {
//     if(!this.form.valid) {
//       let target;
//       for (var i in this.form.controls) {
//         if(!this.form.controls[i].valid) {
//           target = this.form.controls[i];
//           break;
//         }
//       }
//       if(target) {
//         $('html,body').animate({scrollTop: $(target.nativeElement).offset().top}, 'slow');
//       }
//     }
//   }
// }
export class AutofocusDirective implements OnInit {
  private focus = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.focus) {
      // Otherwise Angular throws error: Expression has changed after it was checked.
      window.setTimeout(() => {
        this.el.nativeElement.focus();
      });
    }
  }

  @Input()
  set autofocus(condition: boolean) {
    this.focus = condition;
  }
}

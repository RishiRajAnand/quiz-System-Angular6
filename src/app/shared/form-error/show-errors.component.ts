import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'wkpc-show-errors',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
   <div *ngIf="shouldShowErrors()" class="wk-field-error">
     {{ getError() }}
   </div>
 `
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: params => `##FIELD## can't be blank`,

    minlength: params =>
      `##FIELD## should be minimum ${params.requiredLength} characters`,

    maxlength: params =>
      `##FIELD## should not be greater then ${
        params.requiredLength
      } characters`,

    pattern: params => 'Should be a valid',

    email: params => 'Should be vaild email.',

    duplicate: params => '##FIELD## already exist'
  };
  customError = false;
  @Input() private control: AbstractControlDirective | AbstractControl;
  @Input() private labelName: string;
  @Input() private visible: boolean;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors !== null;
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map(field =>
      this.getMessage(field, this.control.errors[field], this.control)
    );
  }

  getError(): string {
    const errors = Object.keys(this.control.errors).map(field =>
      this.getMessage(field, this.control.errors[field], this.control)
    );
    this.customError = errors[0] ? false : true;

    return errors[0];
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;

    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  private getMessage(type: string, params: any, control: any) {
    if (ShowErrorsComponent.errorMessages[type]) {
      const msg = ShowErrorsComponent.errorMessages[type](params);

      return msg.replace('##FIELD##', this.labelName);
    }

    return;
  }
}

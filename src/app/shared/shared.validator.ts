import { FormGroup } from '@angular/forms';

export function validateTerminateDate(formGroup: FormGroup) {
  if (formGroup) {
    const terminateDate = formGroup.controls.terminateDate.value;
    const effectiveDate = formGroup.controls.effectiveDate.value;
    if (terminateDate && effectiveDate && effectiveDate > terminateDate) {
      return { dateRange: true };
    }
  }

  return null;
}

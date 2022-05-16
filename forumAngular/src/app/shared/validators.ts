import {AbstractControl, ValidationErrors} from "@angular/forms";
import {filter, startWith, Subscription, switchMap} from "rxjs";

export function emailValidator(control: AbstractControl): ValidationErrors | null {

  if (!control.value) {
    return null;
  }

  return /^[A-z0-9\.-]{6,}@gmail\.(bg|com)$/.test(control.value) ? null : {invalidEmail: true};

}

export function sameValueAsFactory(getTargetControl: () => AbstractControl | null) {

  let subscription: Subscription | null;

  return function (control: AbstractControl) {

    if (subscription) { subscription.unsubscribe() ; subscription = null}
    const targetControl = getTargetControl();
    if (!targetControl) {
      return null;
    }

    subscription = control.statusChanges.pipe(
      filter(() => false),
      startWith(null),
      switchMap(() => targetControl.valueChanges)
    ).subscribe({
      next: () => {control.updateValueAndValidity() },
      complete: () => {
        subscription = null;
      }
    })
    return targetControl?.value === control?.value ? null : {sameValue: true}
  }
}

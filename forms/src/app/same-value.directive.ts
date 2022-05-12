import { Directive, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {AbstractControl, NgControl, NgForm, NgModel, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSameValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameValueDirective,
      multi: true
    }
  ]
})
export class SameValueDirective implements Validator, OnDestroy {

  @Input() appSameValue = '';
  @Input() name!: string;
  otherControl!: AbstractControl;
  subscription!: Subscription;

  constructor(private form: NgForm) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  validate(control: AbstractControl): ValidationErrors | null {

    const otherControl = this.form.controls[this.appSameValue];

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

      this.subscription = otherControl.valueChanges!.subscribe(() => {

        control.updateValueAndValidity( { onlySelf: true});

      });

    return control.value !== otherControl?.value ? {
        sameValue: {
          [this.appSameValue]: otherControl?.value,
          [this.name]: control.value
        }
      }
     : null

    }

}


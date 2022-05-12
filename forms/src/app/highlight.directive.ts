import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'highlight'
})
export class HighlightDirective { //implements OnChanges {

  @Input() set appHighlight(isActive:boolean) {
    if (isActive) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }

  @HostBinding('style.color') color = 'black';

 /* constructor(private elementRef: ElementRef) {
  }*/

  /*ngOnChanges(changes: SimpleChanges): void {
        if (changes.isActive.currentValue) {
          this.elementRef.nativeElement.style.color = 'red';
        } else {
          this.elementRef.nativeElement.style.color = 'black';
        }
    }*/

}

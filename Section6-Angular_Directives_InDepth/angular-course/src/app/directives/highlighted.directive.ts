import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted') isHighlighted: boolean = true;

  // This directive adds a 'highlighted' class to the host element
  // when the directive is applied. The class can be used.
  constructor() { console.log('Highlighted Directive created'); }

  @Output() toggleHighlight: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class.highlighted')
  get cssClasses() { return this.isHighlighted; };

  @HostBinding('attr.disabled')
  get disabled() { return "true"; };

  @HostListener('mouseover', ['$event'])
  mouseOver($event: MouseEvent) {
    // console.log('Mouse over event', $event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  };

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);

  };

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}

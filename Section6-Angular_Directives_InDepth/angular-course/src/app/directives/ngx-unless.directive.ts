import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  
  visible = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('ngxUnless')
  set unless(condition: boolean) {
    if (condition && this.visible) {
      this.visible = false;
      this.viewContainer.clear();
    }
    else if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    }
  }

}

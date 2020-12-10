import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxRange]',
})
export class NgxRangeDirective {
  @Input()
  set ngxRange(n: number) {
    this.viewContainer.clear();

    for (let i = 0; i < n; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}

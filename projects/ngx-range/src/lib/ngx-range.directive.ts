import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngxRange]',
})
export class NgxRangeDirective implements OnChanges {
  @Input()
  ngxRange: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngxRange) {
      this.viewContainer.clear();

      for (let i = 0; i < changes.ngxRange.currentValue; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: i,
          index: i,
        });
      }
    }
  }
}

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
  ngxRangeFrom: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngxRangeFrom) {
      this.viewContainer.clear();

      for (let i = 0; i < changes.ngxRangeFrom.currentValue; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: i,
        });
      }
    }
  }
}

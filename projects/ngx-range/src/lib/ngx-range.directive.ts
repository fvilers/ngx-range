import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class NgxRangeDirectiveContext {
  constructor(public readonly $implicit: number) {}
}

@Directive({
  selector: '[ngxRange]',
})
export class NgxRangeDirective implements OnChanges {
  @Input()
  ngxRangeFrom: number = 0;

  @Input()
  ngxRangeTo: number = 0;

  @Input()
  ngxRangeBy: number = 1;

  constructor(
    private templateRef: TemplateRef<NgxRangeDirectiveContext>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngxRangeFrom || changes.ngxRangeTo || changes.ngxRangeBy) {
      this.viewContainer.clear();

      let index = 0;

      for (
        let i = this.ngxRangeFrom;
        i < this.ngxRangeTo;
        i += this.ngxRangeBy
      ) {
        this.viewContainer.createEmbeddedView(
          this.templateRef,
          new NgxRangeDirectiveContext(i),
          index++
        );
      }
    }
  }
}

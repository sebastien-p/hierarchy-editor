import { Directive, Input, HostBinding } from '@angular/core';

import { AppComponent } from '../components/app.component';
import { Filter } from '../models/node.model';

@Directive({
  selector: '[filter]'
})
export class FilterableDirective {
  @Input()
  readonly filter: Filter;

  @HostBinding()
  get hidden(): boolean {
    const { filter } = this.app;
    return !!filter && filter !== this.filter;
  }

  constructor(private readonly app: AppComponent) {}
}
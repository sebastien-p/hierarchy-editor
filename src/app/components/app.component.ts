import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Node, Filter } from '../models/node.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  root: Node = new Node();
  filter: Filter | null = null;

  readonly filters: Filter[] = Object.keys(this.root)
    .filter(property => property !== 'children') as Filter[];

  constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
    private readonly alert: AlertService
  ) {}

  import(input: HTMLInputElement): void {
    const reader = new FileReader();
    
    reader.onload = () => {
      try {
        this.reset(JSON.parse(reader.result as string));
      } catch (error) {
        this.alert.error('invalid JSON');
      }

      input.value = '';
    };

    reader.readAsText(input.files[0]);
  }

  export(): void {
    const data = encodeURIComponent(JSON.stringify(this.root, null, '  '));
    const link: HTMLAnchorElement = this.document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + data;
    link.download = ''; // TODO
    link.click();
  }

  reset(node?: Node): void {
    if (this.alert.confirm()) {
      this.root = new Node(node);
    }
  }
}

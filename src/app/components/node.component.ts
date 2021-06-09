import { Component, Input, OnChanges } from '@angular/core';

import { Node } from '../models/node.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'my-node',
  templateUrl: './node.component.html'
})
export class NodeComponent implements OnChanges {
  @Input()
  readonly node: Node;

  @Input()
  readonly defaultId: string;

  constructor(private readonly alert: AlertService) {}

  ngOnChanges(): void {
    this.setId(this.defaultId);
  }

  setId(id): void {
    this.node.id = id;
  }

  addTag(input: HTMLInputElement): void {
    const value = input.value.trim();

    if (value) {
      this.node.addTag(value);
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    if (this.alert.confirm()) {
      this.node.removeTag(tag);
    }
  }

  addChild(): void {
    this.node.addChild();
  }

  removeChild(child): void {
    if (this.alert.confirm()) {
      this.node.removeChild(child);
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FilterableDirective } from './directives/filterable.directive';
import { AppComponent } from './components/app.component';
import { NodeComponent } from './components/node.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    FilterableDirective,
    AppComponent,
    NodeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

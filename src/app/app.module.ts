import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ExampleClassComponent } from './example-class/example-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

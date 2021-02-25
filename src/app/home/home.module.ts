import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    MainContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainContentComponent,
    NavbarComponent
  ]
})
export class HomeModule { }

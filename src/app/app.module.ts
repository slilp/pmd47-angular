import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadContentComponent } from './head-content/head-content.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadContentComponent,
    MiddleContentComponent,
    HowWorkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

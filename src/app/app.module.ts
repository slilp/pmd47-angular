import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {CatalogModule} from './catalog/catalog.module';

const routes:Routes =  [
  {
    path : '',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CatalogModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }

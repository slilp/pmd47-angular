import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductItemComponent } from './catalog/product-item/product-item.component';
import {HomeModule} from './home/home.module';
import {CatalogModule} from './catalog/catalog.module';
import {BackendService} from './backend.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CatalogModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

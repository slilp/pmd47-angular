import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {BackendService} from '../backend.service';

@NgModule({
  declarations: [ 
    ProductListComponent,
    ProductItemComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProductListComponent,
    ProductItemComponent
  ],
  providers: [BackendService]
})
export class CatalogModule { }

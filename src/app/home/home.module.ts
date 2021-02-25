import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductListComponent} from '../catalog/product-list/product-list.component';

const routes:Routes =  [
  {
    path : 'product',
    component:ProductListComponent
  }
];

@NgModule({
  declarations: [
    MainContentComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    MainContentComponent,
    NavbarComponent
  ]
})
export class HomeModule { }

import { Component , OnInit , ViewChild } from '@angular/core';
import { ProductListComponent } from '../app/catalog/product-list/product-list.component';
import {BackendService} from './backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private backendService:BackendService){}

  @ViewChild(ProductListComponent,{static:true}) productList:ProductListComponent;

  title = 'pmd47-angular';

  ngOnInit():void{
    this.productList.products= this.backendService.getProducts();
  }

}



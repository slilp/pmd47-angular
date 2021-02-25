import { Component, OnInit ,ViewChildren , QueryList } from '@angular/core';
import {Product} from '../../product';
import {ProductItemComponent} from '../product-item/product-item.component';
import {BackendService} from '../../backend.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  @ViewChildren(ProductItemComponent)
  productItems:QueryList<ProductItemComponent>;

  products:Product[];

  constructor(private backendService:BackendService) {
    this.products= backendService.getProducts();
   }

  ngOnInit(): void {

  }

  selectedProduct(productComponent:ProductItemComponent){
    this.productItems.forEach(p=>{
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}

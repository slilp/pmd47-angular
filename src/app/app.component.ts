import { Component , OnInit , ViewChild } from '@angular/core';
import { ProductListComponent } from '../app/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('productList',{static:true}) productList:ProductListComponent;

  title = 'pmd47-angular';

  ngOnInit():void{
    this.productList.products=[
      {
        name:"I-phone",
        price:35000
      },
      {
        name:"Samsung",
        price:30000
      },
      {
        name:"Huawei",
        price:28000
      } 
    ];
  }

}



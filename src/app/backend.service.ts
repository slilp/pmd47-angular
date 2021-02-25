import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  
  getProducts(){
    return [
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

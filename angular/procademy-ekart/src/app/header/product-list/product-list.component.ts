import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name = "Laura";
  addToCart:number = 0;
  product = {
    name: 'iPhone',
    price: 1000,
    color: 'Silver',
    discount: 7,
    inStock: 5,
    pImage: './assets/images/iphone.jpg'
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100) 
  }

  onNameChange($event: any){
    // this.name = $event.target.value;
    // console.log($event.target.value);
  }

  decrementCartValue(){
    if(this.addToCart > 0){
     this.addToCart--;
    }

  }

  incrementCartValue() {
    if(this.addToCart < this.product.inStock){
      this.addToCart++;    
    }

  }
}

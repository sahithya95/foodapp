import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart= [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }
  getTotalPrice() {
    let total = 0;
    this.cart.forEach((product: any, i:number) => {
      total += product.price * product.qty;
    })
    return total;
  }
}

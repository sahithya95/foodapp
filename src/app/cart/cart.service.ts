import { Injectable } from '@angular/core';
import {CartList} from "./cart-list";
import {MatSnackBar} from '@angular/material';
@Injectable()
export class CartService {
   cartList: CartList[] = [];
public dis:boolean=true;
message:string="already added";
action:string="close";
  constructor(public snackBar: MatSnackBar) { }

  getCart() {
    console.log(this.cartList);
    return this.cartList;
  }

  addToCart(product, qtyString:string = "1") {
    console.log(product,qtyString,"saa")
    let qty = Number(qtyString);
    if (this.cartList.length==0) {
      
      this.cartList.push(new CartList(product.restName, product.price, product.food_pic, qty,product.food_name,product.id));
    } else {
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].food_name == product.food_name && this.cartList[i].restName == product.restName ) {
          this.openSnackBar() ;
          console.log("already present")
          return true;
        };
      }

      this.cartList.push(new CartList(product.restName,product.price, product.food_pic, qty,product.food_name,product.id));
    }
  }
  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }

  // openSnackBar() {
  //   this.snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: 500,
  //   });
  // }


  deleteItem (item) {
    this.cartList.splice(this.cartList.indexOf(item), 1);
  }
  editQty(value, i) {
    this.cartList[i].qty = +value;
  }
}
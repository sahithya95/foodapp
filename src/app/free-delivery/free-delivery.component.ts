import { Component, OnInit } from '@angular/core';
import { AllDishes } from '../datas';
import { CartService } from '../cart/cart.service';
import { FavService } from '../favourite/fav.service';

@Component({
  selector: 'app-free-delivery',
  templateUrl: './free-delivery.component.html',
  styleUrls: ['./free-delivery.component.css']
})
export class FreeDeliveryComponent implements OnInit {
dish:any[]=[];
freedish:any;
 currentNumber = 0;

  constructor(private cartService: CartService,
              private favservice:FavService) { }
 
  ngOnInit() {
    console.log(AllDishes,"dish");
    this.freedish=AllDishes;
    for(let i=0;i<this.freedish.length;i++){
    if(this.freedish[i].deliverytype==true){
    this.dish.push(this.freedish[i]);
    console.log(this.dish,"free")
    }
  }
  }

}

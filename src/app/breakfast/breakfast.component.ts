import { Component, OnInit } from '@angular/core';
import { AllDishes } from '../datas';
import { CartService } from '../cart/cart.service';
import { FavService } from '../favourite/fav.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  dish: any[] = [];
  freedish: any;

  
  isfav:boolean=false;
  constructor(private cartService: CartService,
                private favservice:FavService) { }
  ngOnInit() {
    console.log(AllDishes, "dish");
    this.freedish = AllDishes;
    for (let i = 0; i < this.freedish.length; i++) {
      if (this.freedish[i].category_name == "Juice") {
        this.dish.push(this.freedish[i]);
      }
    }
  }
 

}

  


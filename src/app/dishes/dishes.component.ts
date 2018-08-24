import { Component, OnInit } from '@angular/core';
import { AllDishes } from '../datas';
import { CartService } from '../cart/cart.service';
import { FavService } from '../favourite/fav.service';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dish: any[] = [];
  constructor(private cartService: CartService,private favservice:FavService) { }
  ngOnInit() {
    console.log(AllDishes, "dish");
    this.dish = AllDishes;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AllDishes } from '../datas';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
dish:any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(AllDishes,"dish");
    this.dish=AllDishes;
    console.log(this.dish,"d");

  }

}

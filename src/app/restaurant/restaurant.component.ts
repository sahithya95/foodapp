import { Component, OnInit } from '@angular/core';
import { AllDishes } from '../datas';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  dish: any[] = [];
  freedish: any;
  constructor() { }
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

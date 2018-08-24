import { Component, OnInit } from '@angular/core';
import { FavService } from './fav.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  cart= [];
  constructor(private favService: FavService) { }

  ngOnInit() {
    this.cart = this.favService.getFav();
    console.log(this.cart);
  }

}

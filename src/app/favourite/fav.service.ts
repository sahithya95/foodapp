import { Injectable } from '@angular/core';
import { FavList } from "./fav-list";
import {MatSnackBar} from '@angular/material';

@Injectable()
export class FavService {
   favList:FavList[] = [];
    public dis:boolean=true;
    count:boolean=false;
    message:string="already added to favourites";
    action:string="close";
    constructor(public snackBar: MatSnackBar) { }

  getFav() {
    return this.favList;
  }

  addToFavourite(product) {
   
    if (this.favList.length == 0) {
      
      this.favList.push(new FavList(product.restName, product.price, product.food_pic, product.qty,product.food_name,product.id));
     
    } else {
      for (let i = 0; i < this.favList.length; i++) {
        if (this.favList[i].food_name == product.food_name && this.favList[i].restName == product.restName ) {
          this.openSnackBar();
          return true;
        };
      }

      this.favList.push(new FavList(product.restName,product.price, product.food_pic, product.qty,product.food_name,product.id));
    }
  }
 
   openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }

  fav(product,i){
     this.addToFavourite(product);     
     this.setSelected(product,i);
  }

  selected = [];

  checkSelected(data){
      return this.selected.indexOf(data) > -1;
  }

  setSelected(data,i){

    this.selected.push(data);
    console.log(this.selected,"data");
    return this.selected;
    
  }
  unselect:any=[];
  deleteItem (item) {
    console.log(this.selected,"datasss");
    this.unselect=item;    
    this.favList.splice(this.favList.indexOf(item), 1);
    console.log(this.unselect.id,"del");
    for(let i=0;i<this.selected.length;i++){
    
      if(this.selected[i].id==this.unselect.id){
        console.log(this.selected[i],"t")
       this.selected.splice(i,1);
         console.log(this.selected[i],"showw")
      }
      else{
        console.log("contn")
      }

    }
   
  
    
  }

 
 

  
  
}
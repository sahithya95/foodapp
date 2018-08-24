import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatSnackBarModule } from '@angular/material';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThridPageComponent } from './thrid-page/thrid-page.component';
import { DishesComponent } from './dishes/dishes.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FreeDeliveryComponent } from './free-delivery/free-delivery.component';
import { SnacksComponent } from './snacks/snacks.component';
import { JuicesComponent } from './juices/juices.component';
import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DesertsComponent } from './deserts/deserts.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavService } from './favourite/fav.service';

const appRoutes:Routes=[
{ path: 'fisrt-page', component:FirstPageComponent},
{ path: 'second-page', component:SecondPageComponent},
{ path: 'thrid-page', component:ThridPageComponent},
{ path: 'dishes', component:DishesComponent},
{ path:'login', component:LoginComponent},
{ path:'free-delivery', component:FreeDeliveryComponent},
{ path:'snacks', component:SnacksComponent},
{ path:'juices', component:JuicesComponent},
{ path:'breakfast',component:BreakfastComponent},
{ path:'lunch',component:LunchComponent},
{ path:'deserts',component:DesertsComponent},
{ path:'restaurant',component:RestaurantComponent},
{ path:'cart',component:CartComponent},
{ path:'favourite',component:FavouriteComponent},
{ path:'',redirectTo:'/second-page',pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThridPageComponent,
    DishesComponent,
    CuisinesComponent,
    LoginComponent,
    FreeDeliveryComponent,
    SnacksComponent,
    JuicesComponent,
    LunchComponent,
    BreakfastComponent,
    DesertsComponent,
    RestaurantComponent,
    CartComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CartService,FavService],
  bootstrap: [AppComponent]
})
export class AppModule { }

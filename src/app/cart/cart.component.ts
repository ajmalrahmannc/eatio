import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantitiInString:string){
    const quantity = parseInt(quantitiInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
}

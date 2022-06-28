import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag : string): Foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

  }

  getAllTag():Tag[]{
    return [
      { name:'All', count: 12 },
      { name:'FastFood', count: 6 },
      { name:'Burger', count: 2 },
      { name:'Pizza', count: 2 },
      { name:'Lunch', count: 5 },
      { name:'Fry', count: 2 },
      { name:'SlowFood', count: 4 },
      { name:'Dinner', count: 2 },
      { name:'Coffee', count: 1 }
    ]
  }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Cheese Burger',
        cookTime:'15-20',
        price:118,
        favorite: true,
        origins:['Louisville', 'Kentucky'],
        star: 4.1,
        imageUrl:'/assets/food1.jpg',
        tags:['FastFood','Burger']
      },
      {
        id:2,
        name:'Rosemary Pizza',
        cookTime:'40-50',
        price:350,
        favorite: false,
        origins:['Italy'],
        star: 3.7,
        imageUrl:'/assets/food2.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'Veg pizza',
        cookTime:'55-60',
        price:299,
        favorite: true,
        origins:['Italy'],
        star: 4.7,
        imageUrl:'/assets/food3.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:4,
        name:'French Fries',
        cookTime:'10-15',
        price:79,
        favorite: true,
        origins:['Belgium'],
        star: 4.9,
        imageUrl:'/assets/food4.jpg',
        tags:['FastFood','Fry']
      },
      {
        id:5,
        name:'Cream Cheese Pasta',
        cookTime:'20-30',
        price:175,
        favorite: false,
        origins:['France'],
        star: 4.0,
        imageUrl:'/assets/food5.jpg',
        tags:['Lunch']
      },
      {
        id:6,
        name:'Veg Salad',
        cookTime:'10-15',
        price:195,
        favorite: true,
        origins:['Greeks','Romans'],
        star: 4.4,
        imageUrl:'/assets/food6.jpg',
        tags:['Dinner','SlowFood']
      },
      {
        id:7,
        name:'Fried Chicken',
        cookTime:'45-50',
        price:440,
        favorite: true,
        origins:['United States','Scotland'],
        star: 4.6,
        imageUrl:'/assets/food7.jpg',
        tags:['FastFood','Fry']
      },
      {
        id:8,
        name:'Cappuccino',
        cookTime:'3-5',
        price:60,
        favorite: false,
        origins:['Italy'],
        star: 4.8,
        imageUrl:'/assets/food8.jpg',
        tags:['Coffee']
      },
      {
        id:9,
        name:'Meat Balls',
        cookTime:'30-40',
        price:355,
        favorite: false,
        origins:['Persia','Middle East','China'],
        star: 3.7,
        imageUrl:'/assets/food9.jpg',
        tags:['SlowFood','Lunch']
      },
      {
        id:10,
        name:'Smoked Salmon',
        cookTime:'55-60',
        price:945,
        favorite: true,
        origins:['Scotland'],
        star: 4.9,
        imageUrl:'/assets/food10.jpg',
        tags:['SlowFood','Lunch']
      },
      {
        id:11,
        name:'Hamburger',
        cookTime:'10-15',
        price:159,
        favorite: false,
        origins:['Germany','US'],
        star: 3.5,
        imageUrl:'/assets/food11.jpg',
        tags:['FastFood','Burger']
      },
      {
        id:12,
        name:'Chicken Soup',
        cookTime:'40-50',
        price:55,
        favorite: false,
        origins:['India','Asia'],
        star: 3.0,
        imageUrl:'/assets/food12.jpg',
        tags:['SlowFood','Dinner']
      },

      
    ]
  }
}

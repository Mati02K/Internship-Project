import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
// Storing data in a service and retrieving it..
  private data = [
    {
      category: 'Fruits',
      expanded: true,
      products: [
        { id: 0, name: 'Mango', price: '8', imageUrl:'./assets/mango.jpg' },
        { id: 1, name: 'Apple', price: '5', imageUrl:'./assets/apple.jpg'  },
        { id: 2, name: 'Orange', price: '9', imageUrl:'./assets/orange.jpg'  },
        { id: 3, name: 'Banana', price: '7', imageUrl:'./assets/Banana.jpg'  }
      ]
    },
    {
      category: 'Meat',
      products: [
        { id: 4, name: 'Chicken', price: '8', imageUrl:'./assets/chicken.jpg'  },
        { id: 5, name: 'Prawn', price: '6', imageUrl:'./assets/prawn.jpg'  }
      ]
    },
    {
      category: 'Vegetables',
      products: [
        { id: 6, name: 'Carrot', price: '8', imageUrl:'./assets/carrots.jpg'  },
        { id: 7, name: 'Potato', price: '5', imageUrl:'./assets/potato.jpg'  },
        { id: 8, name: 'Onion', price: '9', imageUrl:'./assets/onion.jpg'  }
      ]
    }
  ];
 
  private cart = [];
 

  constructor() { }

  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  items = [];
// Setting the slides view of the items
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router,
    private cartService: CartService) {}
// Get Items
    ngOnInit() {
      this.items = this.cartService.getProducts();
      this.cart = this.cartService.getCart();
    }

    addToCart(product) {
      this.cartService.addProduct(product);
    }
  openCart() {
    this.router.navigate(['activity']);
  }
  proceed(){
    this.router.navigate(['login']);
  }

}

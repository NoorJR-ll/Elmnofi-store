import { Component, inject } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  private readonly cart = inject(CartService);

  readonly items = this.cart.items;
  readonly count = this.cart.count;
  readonly total = this.cart.total;
  
  showThankYou = false;

  remove(id: string) { this.cart.removeItem(id); }
  dec(id: string) { this.cart.decrementItem(id); }
  add(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
  clear() { this.cart.clear(); }
  
  checkout() {
    this.showThankYou = true;
    this.cart.clear();
    
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      this.showThankYou = false;
    }, 5000);
  }
}



import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-giftcards-page',
  standalone: true,
  templateUrl: './giftcards.html',
  styleUrl: './giftcards.css'
})
export class GiftcardsPage {
  private readonly cart = inject(CartService);
  addToCart(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}



import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  private readonly cart = inject(CartService);

  addToCart(id: string, title: string, price: number, imageUrl?: string): void {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}

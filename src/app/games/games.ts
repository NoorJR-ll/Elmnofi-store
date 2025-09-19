import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-games-page',
  standalone: true,
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class GamesPage {
  private readonly cart = inject(CartService);
  addToCart(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}



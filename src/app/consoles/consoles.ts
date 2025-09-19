import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-consoles-page',
  standalone: true,
  templateUrl: './consoles.html',
  styleUrl: './consoles.css'
})
export class ConsolesPage {
  private readonly cart = inject(CartService);
  addToCart(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}



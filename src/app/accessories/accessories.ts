import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  templateUrl: './accessories.html',
  styleUrl: './accessories.css'
})
export class AccessoriesPage {
  private readonly cart = inject(CartService);
  addToCart(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}



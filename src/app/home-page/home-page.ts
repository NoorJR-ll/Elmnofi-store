import { Component, inject } from '@angular/core';
import { Sider } from '../sider/sider';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Sider],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  private readonly cart = inject(CartService);
  
  addToCart(id: string, title: string, price: number, imageUrl?: string) {
    this.cart.addItem({ id, title, price, imageUrl });
  }
}



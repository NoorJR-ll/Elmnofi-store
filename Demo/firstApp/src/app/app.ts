import { Component, signal } from '@angular/core';
import { Header } from './Header/header.component';
import { Footer } from './footer/footer';
import { Slider } from './slider/slider';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [Header , Footer ,Slider ,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstApp');
}

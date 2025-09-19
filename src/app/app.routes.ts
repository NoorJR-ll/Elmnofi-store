import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ConsolesPage } from './consoles/consoles';
import { GamesPage } from './games/games';
import { AccessoriesPage } from './accessories/accessories';
import { GiftcardsPage } from './giftcards/giftcards';
import { AboutPage } from './about/about';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'consoles', component: ConsolesPage },
  { path: 'games', component: GamesPage },
  { path: 'accessories', component: AccessoriesPage },
  { path: 'giftcards', component: GiftcardsPage },
  { path: 'about', component: AboutPage },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];

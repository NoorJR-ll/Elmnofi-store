import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Students } from './students/students';
import { SwitchCom } from './switch-com/switch-com';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,SwitchCom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ecommerce');
}

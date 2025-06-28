import { Component } from '@angular/core';
import { ThemeSwitch } from '../_items/theme-switch/theme-switch';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeSwitch],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}

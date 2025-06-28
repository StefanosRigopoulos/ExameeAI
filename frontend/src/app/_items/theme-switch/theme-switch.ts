import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../_services/theme-service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.html',
  styleUrls: ['./theme-switch.scss']
})
export class ThemeSwitch implements OnInit {
  isLightMode = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isLightMode = this.themeService.getSavedTheme() === 'light';
  }

  onToggle(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isLightMode = isChecked;
    this.themeService.setTheme(isChecked ? 'light' : 'dark');
  }
}
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'theme';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const savedTheme = this.getSavedTheme();
      this.setTheme(savedTheme);
    }
  }

  getSavedTheme(): 'light' | 'dark' {
    if (!this.isBrowser) return 'light';
    return (localStorage.getItem(this.storageKey) as 'light' | 'dark') || 'light';
  }

  setTheme(theme: 'light' | 'dark'): void {
    if (!this.isBrowser) return;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  isDarkTheme(): boolean {
    return this.getSavedTheme() === 'dark';
  }

  isLightTheme(): boolean {
    return this.getSavedTheme() === 'light';
  }
}
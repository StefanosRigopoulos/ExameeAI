import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  activeDropdown: string | null = null;
  currentPage: string = 'home';
  private dropdownTimeout: any;
  mobileMenuOpen = false;

  onDropdownEnter(dropdownType: string | null): void {
    clearTimeout(this.dropdownTimeout);
    this.activeDropdown = dropdownType;
  }

  onDropdownLeave(): void {
    this.dropdownTimeout = setTimeout(() => {
      this.activeDropdown = null;
    }, 150);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navbar = document.querySelector('.navbar');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    
    if (this.mobileMenuOpen && navbar && mobileDropdown) {
      if (!navbar.contains(target) && !mobileDropdown.contains(target)) {
        this.closeMobileMenu();
      }
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 1200 && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}

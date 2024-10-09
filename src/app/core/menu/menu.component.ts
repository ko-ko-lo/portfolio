import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.scss',
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  // Close the menu when navigating via the logo
  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    this.router.navigate(['/']);
  }
}

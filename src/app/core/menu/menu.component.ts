import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'], // Corrected to 'styleUrls'
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // No longer detecting yoga routine page
    // Any necessary initialization can go here
  }

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

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-home.component.html',
  styleUrl: './hero-home.component.scss',
})
export class HeroHomeComponent {}

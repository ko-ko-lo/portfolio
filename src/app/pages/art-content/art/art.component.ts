import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtworksComponent } from '../../../components/artworks/artworks.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [RouterModule, IntroComponent, ArtworksComponent],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss',
})
export class ArtComponent {
  title: string = 'A Journey of Self-Expression';
  text: string =
    "For me, art has always been about expressing thoughts and emotions that I couldn't put into words. It's a way to connect with myself, and communicate ideas through creativity.";
}

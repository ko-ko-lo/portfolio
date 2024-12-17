import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-walks-in-nature',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './walks-in-nature.component.html',
  styleUrl: './walks-in-nature.component.scss',
})
export class WalksInNatureComponent {
  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}

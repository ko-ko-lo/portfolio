import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Art } from '../../models/art.model';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.scss',
})
export class ArtworksComponent {
  arts: Art[] = [];

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.arts = this.artService.getArts();
  }
}

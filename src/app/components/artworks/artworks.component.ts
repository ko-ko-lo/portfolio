import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Art } from '../../models/art.model';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './artworks.component.html',
})
export class ArtworksComponent implements OnInit {
  @Input() artLimit: number | null = null; // Allows dynamic limiting
  @Input() useRelativeLinks: boolean = false; // Default is absolute links

  arts: Art[] = []; // Full list from service

  constructor(private artService: ArtService) {}

  ngOnInit(): void {
    this.arts = this.artService.getArts(); // Fetch full list
  }

  get displayedArt(): Art[] {
    return this.artLimit ? this.arts.slice(0, this.artLimit) : this.arts;
  }
}

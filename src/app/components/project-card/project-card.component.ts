import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewCardData } from '../../models/card.model';
import { ProjectTeaserService } from '../../services/project-teaser.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  projectTeasers: OverviewCardData[] = [];

  constructor(private projectTeaserService: ProjectTeaserService) {}

  ngOnInit(): void {
    this.projectTeasers = this.projectTeaserService.getProjectTeaser();
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, IntroComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  title: string = 'Where Ideas Become Reality: My Projects';
  text: string[] = [
    "Here, you'll find a collection of the projects that reflect my journey as a designer, developer and problem-solver. Each project represents a unique challenge, blending creativity, design and technical development to bring ideas to life.",
  ];
}

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
    "Here, you'll discover a collection of projects that reflect my journey as a Software Developer, Designer, and Problem-solver. Each project holds a story of creativity and care, where thoughtful design and technical craftsmanship come together to bring ideas to life.",
  ];
}

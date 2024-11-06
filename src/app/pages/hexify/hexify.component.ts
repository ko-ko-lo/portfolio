import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-hexify',
  standalone: true,
  imports: [RouterModule, IntroComponent],
  templateUrl: './hexify.component.html',
  styleUrl: './hexify.component.scss',
})
export class HexifyComponent {
  title: string = 'Hexify Plugin: Seamlessly Bring Figma Colors to Code';
  text: string[] = [
    'After repeatedly transferring color collections manually from Figma to SCSS, I developed this plugin to streamline the process. Hexify extracts color variables directly from Figma collections, converting them into hex values and generating SCSS, CSS, or JSON files.',
  ];
}

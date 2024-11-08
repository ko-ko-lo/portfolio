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
    'Creating Hexify started from a simple need: I wanted a way to effortlessly convert Figma color collections into code, without the tedious task of transferring colors manually. So I made Hexify - a small tool that turns color collections into SCSS, CSS, or JSON, all ready for use with just a few clicks.',
    "At first, I was just curious to see if I could build a Figma plugin, but soon I realized that this could be a meaningful addition to my workflow - and maybe even a stepping stone for creating other helpful tools. Hexify isn't just about automating a task, it's also my invitation to explore new ideas, learn new technologies, and share something that makes creative work just a little easier.",
  ];

  codeSnippet: string = `
  export async function getColorVariablesByIds(
    variableIds: string[]
  ): Promise<Variable[]> {
    const variables = await Promise.all(
      variableIds.map(async (id) => {
        try {
          return await figma.variables.getVariableByIdAsync(id);
        } catch (error) {
          console.error('Error retrieving variable with ID:', error);
          return null;
        }
      })
    );

    return variables.filter(
      (variable): variable is Variable =>
        variable !== null && variable.resolvedType === "COLOR"
    );
  }`;

  scrollTo(element: string): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

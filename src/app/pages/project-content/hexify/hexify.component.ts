import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../../components/intro/intro.component';

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
    'Creating Hexify started from a simple need: I wanted a way to effortlessly convert Figma Color Collections into Code, without the tedious task of transferring Color Values manually. So I made Hexify - a small tool that turns Color Collections into SCSS, CSS, or JSON, all ready for use with just a few clicks.',
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

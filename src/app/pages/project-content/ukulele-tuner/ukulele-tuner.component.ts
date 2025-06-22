import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsBigComponent } from '../../../components/technical-tools-big/technical-tools-big.component';

@Component({
  selector: 'app-ukulele-tuner',
  standalone: true,
  imports: [
    RouterModule,
    BreadcrumbComponent,
    IntroComponent,
    TechnicalToolsBigComponent,
    ScrollMenuComponent,
  ],
  templateUrl: './ukulele-tuner.component.html',
  styleUrl: './ukulele-tuner.component.scss',
})
export class UkuleleTunerComponent {
  title: string = 'Aloha Tune';
  text: string =
    'A Hawaiian-inspired Ukulele Tuner designed for simplicity & accuracy.';

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. UX/UI Design' },
    { id: 'section3', label: '3. Development Insights' },
    { id: 'section4', label: '4. Final Reflections' },
  ];
}

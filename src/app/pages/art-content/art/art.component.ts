import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtworksComponent } from '../../../components/artworks/artworks.component';
import { DividerComponent } from '../../../components/divider/divider.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { MyQuoteComponent } from '../../../components/my-quote/my-quote.component';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [
    RouterModule,
    IntroComponent,
    ArtworksComponent,
    DividerComponent,
    MyQuoteComponent,
  ],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss',
})
export class ArtComponent {
  title: string = 'Beyond Words, Through Art';
  text: string =
    'Art has always been my way of expressing thoughts and emotions that words can’t capture - a space where creativity becomes a language of its own. It allows me to connect with myself and share ideas in a way that feels honest and meaningful.';
}

import { Injectable } from '@angular/core';
import { Art } from '../models/art.model';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  private arts: Art[] = [
    {
      id: 4,
      title: 'The Beauty of Connection without words',
      image: 'art/preview/rooted.jpg',
      link: 'art/connection-without-words',
      absoluteLink: 'connection-without-words',
    },
    {
      id: 3,
      title: 'Reflections in Black and White',
      image: 'art/preview/reflections.jpg',
      link: 'art/reflections-in-black-and-white',
      absoluteLink: 'reflections-in-black-and-white',
    },
    {
      id: 2,
      title: 'Connection between Human and Nature',
      image: 'art/preview/bird.jpg',
      link: 'art/connection-human-nature',
      absoluteLink: 'connection-human-nature',
    },
    {
      id: 1,
      title: 'Protecting Our Planet: A Journey Back to Nature',
      image: 'art/preview/ourplanet.jpg',
      link: 'art/back-to-nature',
      absoluteLink: 'back-to-nature',
    },
  ];
  getArts(): Art[] {
    return this.arts;
  }
}

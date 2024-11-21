import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { ConnectionComponent } from './connection/connection.component';
import { OurPlanetComponent } from './our-planet/our-planet.component';
import { ReflectionsComponent } from './reflections/reflections.component';
import { WalksInNatureComponent } from './walks-in-nature/walks-in-nature.component';

const routes: Routes = [
  { path: '', component: ArtComponent },
  { path: 'reflections-in-black-and-white', component: ReflectionsComponent },
  { path: 'connection-without-words', component: ConnectionComponent },
  { path: 'back-to-nature', component: OurPlanetComponent },
  { path: 'connection-human-nature', component: WalksInNatureComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ArtModule {}

console.log('ArtModule loaded');

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexifyComponent } from './hexify/hexify.component';
import { ProjectsComponent } from './projects/projects.component';
import { YogaApplicationComponent } from './yoga-application/yoga-application.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }, // Main Projects page
  { path: 'yin-style-yoga-application', component: YogaApplicationComponent },
  { path: 'figma-plugin-hexify', component: HexifyComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {}

console.log('ProjectsModule loaded');

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexifyComponent } from './hexify/hexify.component';
import { JsonifyComponent } from './jsonify/jsonify.component';
import { ProjectsComponent } from './projects/projects.component';
import { YogaApplicationComponent } from './yoga-application/yoga-application.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }, // Main Projects page
  { path: 'yin-style-yoga-application', component: YogaApplicationComponent },
  { path: 'figma-plugin-hexify', component: HexifyComponent },
  { path: 'figma-plugin-jsonify', component: JsonifyComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {
  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}

console.log('ProjectsModule loaded');

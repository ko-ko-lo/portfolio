import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexifyComponent } from './hexify/hexify.component';
import { JsonifyComponent } from './jsonify/jsonify.component';
import { OpenStillnessComponent } from './open-stillness/open-stillness.component';
import { ProjectsComponent } from './projects/projects.component';
import { YogaApplicationComponent } from './yoga-application/yoga-application.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }, // Main Projects page
  { path: 'yin-style-yoga-application', component: YogaApplicationComponent },
  { path: 'figma-plugin-hexify', component: HexifyComponent },
  { path: 'figma-plugin-jsonify', component: JsonifyComponent },
  { path: 'open-stillness-application', component: OpenStillnessComponent },
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

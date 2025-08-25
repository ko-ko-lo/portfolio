import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAccessibilityComponent } from './angular-accessibility/angular-accessibility.component';
import { BlogComponent } from './blog/blog.component';
import { DesignProcessComponent } from './design-process/design-process.component';
import { KeynotePluginDevelopmentComponent } from './keynote-plugin-development/keynote-plugin-development.component';
import { ResearchComponent } from './research/research.component';
import { StylingStoryComponent } from './styling-story/styling-story.component';
import { UsabilityTestingComponent } from './usability-testing/usability-testing.component';
import { UxGuidelinesComponent } from './ux-guidelines/ux-guidelines.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'quantitative-qualitative-research', component: ResearchComponent },
  { path: 'usability-testing', component: UsabilityTestingComponent },
  { path: 'ux-guidelines', component: UxGuidelinesComponent },
  { path: 'angular-accessibility', component: AngularAccessibilityComponent },
  { path: 'styling-story', component: StylingStoryComponent },
  { path: 'design-process', component: DesignProcessComponent },
  {
    path: 'keynote-plugin-development',
    component: KeynotePluginDevelopmentComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogModule {
  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}

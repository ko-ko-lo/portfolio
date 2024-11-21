import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ResearchComponent } from './research/research.component';
import { UsabilityTestingComponent } from './usability-testing/usability-testing.component';
import { UxGuidelinesComponent } from './ux-guidelines/ux-guidelines.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'quantitative-qualitative-research', component: ResearchComponent },
  { path: 'usability-testing', component: UsabilityTestingComponent },
  { path: 'ux-guidelines', component: UxGuidelinesComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogModule {}

console.log('BlogModule loaded');

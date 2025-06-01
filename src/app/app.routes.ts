import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'expertise',
    component: ExpertiseComponent,
    title: 'Expertise',
  },
  {
    path: 'about',
    component: AboutMeComponent,
    title: 'About',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog-content/blog.module').then((m) => m.BlogModule),
    title: 'Blog',
  },

  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/project-content/projects.module').then(
        (m) => m.ProjectsModule
      ),
    title: 'Projects',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

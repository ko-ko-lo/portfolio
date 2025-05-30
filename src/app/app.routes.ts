import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Portfolio',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'About me | Portfolio',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog-content/blog.module').then((m) => m.BlogModule),
    title: 'Blog | Portfolio',
  },

  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/project-content/projects.module').then(
        (m) => m.ProjectsModule
      ),
    title: 'Projects | Portfolio',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

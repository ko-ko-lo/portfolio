import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog-content/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'art',
    loadChildren: () =>
      import('./pages/art-content/art.module').then((m) => m.ArtModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/project-content/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

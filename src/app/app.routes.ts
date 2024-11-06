import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ArtComponent } from './pages/art-content/art/art.component';
import { ConnectionComponent } from './pages/art-content/connection/connection.component';
import { OurPlanetComponent } from './pages/art-content/our-planet/our-planet.component';
import { ReflectionsComponent } from './pages/art-content/reflections/reflections.component';
import { WalksInNatureComponent } from './pages/art-content/walks-in-nature/walks-in-nature.component';
import { BlogComponent } from './pages/blog-content/blog/blog.component';
import { ResearchComponent } from './pages/blog-content/research/research.component';
import { UsabilityTestingComponent } from './pages/blog-content/usability-testing/usability-testing.component';
import { UxGuidelinesComponent } from './pages/blog-content/ux-guidelines/ux-guidelines.component';
import { HexifyComponent } from './pages/hexify/hexify.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { YogaApplicationComponent } from './pages/yoga-application/yoga-application.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'blog/quantitative-qualitative-research',
    component: ResearchComponent,
  },
  { path: 'blog/usability-testing', component: UsabilityTestingComponent },
  { path: 'blog/ux-design-guidelines', component: UxGuidelinesComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'projects/yin-style-yoga-application',
    component: YogaApplicationComponent,
  },
  { path: 'projects/figma-plugin-hexify', component: HexifyComponent },
  { path: 'art', component: ArtComponent },
  {
    path: 'art/reflections-in-black-and-white',
    component: ReflectionsComponent,
  },
  { path: 'art/connection-without-words', component: ConnectionComponent },
  { path: 'art/back-to-nature', component: OurPlanetComponent },
  { path: 'art/connection-human-nature', component: WalksInNatureComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

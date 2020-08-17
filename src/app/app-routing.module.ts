import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';
import { LatestComponent } from './latest/latest.component';
import { ProjectComponent } from './project/project.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  {
    path:'',redirectTo: 'home',pathMatch: 'full'
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'profile',component: ProfileComponent
  },
  {
    path: 'research',component: ResearchComponent
  },
  {
    path: 'latest',component: LatestComponent
  },
  {
    path: 'project',component: ProjectComponent
  },
  {
    path: 'publication',component: PublicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

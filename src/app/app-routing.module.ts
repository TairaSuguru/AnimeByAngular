import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'animevideo',
    loadChildren: () => import('./video/video.module').then(mod => mod.VideoModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then(mod => mod.WorkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

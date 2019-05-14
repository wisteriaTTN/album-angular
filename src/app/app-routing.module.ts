import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { AlbumDetailComponent } from './component/album-detail/album-detail.component';

const routes: Routes = [
  {
    path: 'album-list',
    component: AlbumListComponent
  },
  {
    path: 'album-detail/:id',
    component: AlbumDetailComponent
  },
  {
    path: '',
    redirectTo: '/album-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

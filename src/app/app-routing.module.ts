import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './component/album-list/album-list.component';

const routes: Routes = [
  { 
    path: 'album-list', 
    component: AlbumListComponent 
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

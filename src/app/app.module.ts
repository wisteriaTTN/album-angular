import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { AlbumComponent } from './component/album/album.component';
import { AlbumDetailComponent } from './component/album-detail/album-detail.component';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

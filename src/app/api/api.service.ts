import { Injectable } from '@angular/core';
import { helper } from './helper';
import { Album } from '../models/album';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Albums: Album[] = [];

  constructor(private helper: helper) {
    this.Albums = this.helper.generateAlbumList(30);
   }

  getAlbumList(count: number = 10) {
    return this.Albums.slice(0,count);
  }

  getAlbumById(id: string) {
    return this.Albums.find((self) => self.id === id);
  }
}

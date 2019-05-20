import { Injectable } from '@angular/core';
import { helper } from './helper';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Albums: Album[] = [];

  constructor(private helper: helper) {
    this.Albums = this.helper.generateAlbumList(10);
   }

  getAlbumList(count: number = 10) {
    return this.Albums.slice(0,count);
  }

  getAlbumById(id: string) {
    let temp = this.Albums.find((self) => self.id === id);
    return temp;
  }

  uploadPhoto(image: Photo, albumId: string){
    let temp = this.Albums.find((self) => self.id === albumId);
    temp.photos.push(image);
    return temp;
  }

}

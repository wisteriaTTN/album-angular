import faker from 'faker';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class helper {
  constructor() {}

  generateAlbumPhoto(numberPhoto: number) : Album {
    let album: Album = new Album();
    album.title = faker.lorem.words();
    for(let i = 0; i < numberPhoto; i++) {
      const photo: Photo = new Photo(faker.lorem.words(), faker.image.image());
      album.photos.push(photo);
    }
    return album;
  }

  generateAlbumList(numberAlbum: number) : Album[] {
    let albums: Album[] = [];
    for(let i = 0; i < numberAlbum; i++) {
      let album = new Album();
      album = this.generateAlbumPhoto(10);
      album.id = i.toString();
      albums.push(album);
    }
    return albums
  }
}

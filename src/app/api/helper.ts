import faker from 'faker';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { ImageSnippet } from '../models/image';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class helper {
  constructor(private imageService: ImageService) {}

  selectedFile: ImageSnippet;

  generateAlbumPhoto(numberPhoto: number) : Album {
    let album: Album = new Album();
    album.title = faker.lorem.words();
    for(let i = 0; i < numberPhoto; i++) {
      const photo: Photo = new Photo(faker.lorem.words(), faker.image.image(), faker.image.image());
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

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
}

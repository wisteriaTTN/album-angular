import { Photo } from "./photo";

export class Album {
  id: string;
  title: string;
  photos: Photo[];

  constructor() {
    this.id = '0';
    this.title = '';
    this.photos = [];
  }
}

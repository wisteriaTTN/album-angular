import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  AlbumsList: Album[] = [];
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.AlbumsList = this.api.getAlbumList();
  }

  addAlbum() {
    const albumId = this.AlbumsList.length;
    return this.AlbumsList.push(new Album());
  }
}

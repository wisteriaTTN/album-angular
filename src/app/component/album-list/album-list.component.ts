import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
   
  AlbumsList: any = [];
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.AlbumsList = this.api.getAlbumList();
    console.log(this.AlbumsList);
  }

}

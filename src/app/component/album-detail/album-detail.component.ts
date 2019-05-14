import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  constructor(private api: ApiService, private rout: ActivatedRoute) { }

  ngOnInit() {
    const id = this.rout.snapshot.paramMap.get('id');
    this.album = this.api.getAlbumById(id);
  }
}

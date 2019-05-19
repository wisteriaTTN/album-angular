import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Lightbox } from 'ngx-lightbox';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  constructor(private api: ApiService, private rout: ActivatedRoute, private _lightbox: Lightbox) { }

  ngOnInit() {
    const id = this.rout.snapshot.paramMap.get('id');
    this.album = this.api.getAlbumById(id);
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album.photos, index);
  }

  addPhoto(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(event.target.result);
      this.album = this.api.uploadPhoto(new Photo(file.name, file.name, event.target.result), this.album.id)
    });

    reader.readAsDataURL(file);
  }

}

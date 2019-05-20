import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Album } from 'src/app/models/album';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  form: FormGroup;

  createForm() {
    this.form = this.formBuilder.group({
      nameAlbum: '',
      imageAlbum: ''
    });
  }

  AlbumsList: Album[] = [];
  constructor(private api : ApiService, private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.AlbumsList = this.api.getAlbumList();
  }

  onSubmit(image: any) {
    const albumId = this.AlbumsList.length.toString();
    var newAlbum = new Album();
    newAlbum.id = albumId;
    newAlbum.title = this.form.value.nameAlbum;
    const file: File = image.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      newAlbum.photos.push(new Photo(file.name, file.name, event.target.result));
      this.AlbumsList.push(newAlbum);
    });

    reader.readAsDataURL(file);

  }
}

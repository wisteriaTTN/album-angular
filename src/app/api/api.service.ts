import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faker } from 'faker';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAlbumList() {
   return Faker;
  }
}

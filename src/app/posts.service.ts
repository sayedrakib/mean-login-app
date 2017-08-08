import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) {}

  getAllPOsts() {
  //  return this.http.get('/api/posts')
return this.http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/disciplines')
    .map(res => res.json());
  }

}

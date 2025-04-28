import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]> {
    // return fetch('https://www.reddit.com/r/programming.json')
    // .then(res => res.json())
    return this.http.get<any>('https://www.reddit.com/r/Art.json').pipe(
      map(data => data.data.children),
      map(children => children.map((child: any) => child.data as Post))
    )
  }
}

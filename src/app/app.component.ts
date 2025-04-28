import { Component, inject } from '@angular/core';
import { RedditService } from './services/reddit.service';
import { Post } from './models/post';
import { MasterComponent } from "./components/master/master.component";
import { SlaveComponent } from "./components/slave/slave.component";

@Component({
  selector: 'app-root',
  imports: [MasterComponent, SlaveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  redditService = inject(RedditService)
  posts: Post[] = []

  constructor() {
    this.redditService.getData().subscribe({
      next: data => {
        this.posts = data
      },
      error: err => {},
      complete: () => {}
    })
  }
}

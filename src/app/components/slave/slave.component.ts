import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-slave',
  imports: [AsyncPipe],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {

  service = inject(ComService)

  subscribeReSbj() {
    this.service.reSbj.subscribe(data => console.log('Replay subject', data))
  }

  subscribeBeSbj() {
    this.service.beSbj.subscribe(data => console.log('Behave subject', data))
  }
  
  subscribeSbj() {
    this.service.sbj.subscribe(data => console.log('normal subject', data))
  }

  unsubscribe() {}
}

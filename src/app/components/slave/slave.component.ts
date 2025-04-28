import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com.service';

@Component({
  selector: 'app-slave',
  imports: [],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {

  service = inject(ComService)

  subscribeReSbj() {
    this.service.reSbj.subscribe(data => console.log('Re subject', data))
  }

  subscribeBeSbj() {
    this.service.beSbj.subscribe(data => console.log('Be subject', data))
  }
  
  subscribeSbj() {
    this.service.sbj.subscribe(data => console.log('normal subject', data))
  }
}

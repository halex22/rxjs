import { Component, inject } from '@angular/core';
import { ComService } from '../../services/com.service';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  service = inject(ComService)
  
  changeReSbj() {
    const newString = 'normalSubject' + Date.now()
    this.service.sbj.next(newString)
  }
  changeBeSbj() {
    const newString = 'BehaviorSubject' + Date.now()
    this.service.beSbj.next(newString)
  }
  changeSbj() {
    const newString = 'Re Subject' + Date.now()
    this.service.reSbj.next(newString)
  }
  
}

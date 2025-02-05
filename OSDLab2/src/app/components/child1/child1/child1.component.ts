import { Component } from '@angular/core';
import { SignalService } from '../../../services/signal/signal.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  //retrive and display Count
  constructor(
    private signalService:SignalService
  ){}

  displayCount(){
    return this.signalService.getCount();
  }
}

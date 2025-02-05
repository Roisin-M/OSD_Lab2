import { Component } from '@angular/core';
import { SignalService } from '../../services/signal/signal.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
    //retrive and display Count
    constructor(
      private signalService:SignalService
    ){}
    
    displayDoubleCount(){
      const doubleCount = this.signalService.getDoubleCount();
      console.log("Child2Component: Current double count is", doubleCount);
      return doubleCount;
    }
}

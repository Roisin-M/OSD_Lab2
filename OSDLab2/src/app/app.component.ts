import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//signal service import
import { SignalService } from './services/signal/signal.service';
import { Child1Component } from "./components/child1/child1/child1.component";
import { Child2Component } from "./components/child2/child2.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSDLab2';
    //retreive signal service
    constructor(
      private signalService:SignalService){}
  //button increment
  increment(){
    this.signalService.increment();
  }
  //button decrement
  decrement(){
    this.signalService.decrement();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//signal service import
import { SignalService } from './services/signal/signal.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

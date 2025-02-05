import { 
  Injectable,
  signal,
  computed, 
  WritableSignal,
  Signal} from '@angular/core';
//import signal and computed to use angular signal
@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }
  //2 signals
  //Count which is writeable
  //count = signal(0);
  count: WritableSignal<number> = signal(0); 
  //doubleCount is computed by multiplying count by 2
  //doubleCount = computed(() => this.count() * 2);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  //increment()
  increment(){
    this.count.update(value => value + 1);
  }
  //decrement() should not allow Count to go below 0
  decrement(){
    if(this.count()>0){
      this.count.update(value => value - 1);
    }
  }
  //getCount()
  getCount(){
    return this.count();
  }
}

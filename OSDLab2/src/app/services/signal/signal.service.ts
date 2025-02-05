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
    console.log("SignalService: Incrementing count");
    this.count.update(value => value + 1);
    console.log("SignalService: Count after increment:", this.getCount());
  }
  //decrement() should not allow Count to go below 0
  decrement(){
    if(this.count()>0){
      console.log("SignalService: Decrementing count");
      this.count.update(value => value - 1);
      console.log("SignalService: Count after decrement:", this.getCount());
    }
    else{
      console.log("SignalService: Cannot decrement. Count is already 0");
    }
  }
  //getCount()
  getCount(){
    console.log("SignalService: getCount() called. Current count:", this.count());
    return this.count();
  }
  //getDoubleCount()
  getDoubleCount(){
    console.log("SignalService: getDoubleCount() called. Current double count:", this.doubleCount());
    return this.doubleCount();
  }
}

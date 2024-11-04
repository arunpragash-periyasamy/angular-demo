import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private counterSignal = signal(0);
  private counts = signal({
    home: 0,
    main: 0,
    sales: 0,
  });
  constructor() {}
  get counter() {
    return this.counterSignal.asReadonly();
  }

  // Method to update the counter
  increment() {
    this.counterSignal.set(this.counterSignal() + 1);
  }

  decrement() {
    this.counterSignal.set(this.counterSignal() - 1);
  }

  incrementCount(key: 'home' | 'main' | 'sales') {
    this.increment();
    this.counts.set({
      ...this.counts(),
      [key]: (this.counts()[key] || 0) + 1
    });
  }

  getCount(key: 'home' | 'main' | 'sales'){
    return this.counts()[key];
  }
} 

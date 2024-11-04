import { Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from './state.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  home = computed(()=> this.stateService.getCount('home'));
  sales = computed(()=> this.stateService.getCount('sales'));
  main = computed(()=> this.stateService.getCount('main'));
  constructor(private stateService : StateService){}
  
  setCounter(key: 'home' | 'main' | 'sales') {
    this.stateService.incrementCount(key);  // Directly call incrementCount on the stateService
  }
}

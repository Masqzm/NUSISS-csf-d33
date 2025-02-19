import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  nums: number[] = [1, 2, 3, 4, 5]

  whenNewNumber($event: number) {
    console.info('>>> $event', $event)

    // Push to front of array
    this.nums.unshift($event)
  }
}

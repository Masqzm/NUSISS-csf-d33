import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NumInputComponent } from './components/num-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  // Find NumInputComponent
  //@ViewChild(NumInputComponent)
  //numInput!: NumInputComponent
  @ViewChild('nic2')
  numInput!: NumInputComponent

  @ViewChildren(NumInputComponent)
  numInputs!: QueryList<NumInputComponent>

  nums: number[] = [1, 2, 3, 4, 5]

  newNum = 0

  ngOnInit(): void {
    console.info('>>> onInit: ', this.numInput)
  }

  ngAfterViewInit(): void {
    //console.info('>>> afterViewInit: ', this.numInput)
    //console.info('>>> name: ', this.numInput.instanceName) 
    console.info('>>> children: ', this.numInputs)    
    for(let c of this.numInputs)
      console.info('>>> numInput name: ', c.instanceName)
  }

  whenNewNumber($event: number) {
    console.info('>>> $event', $event)

    this.newNum = $event
    
    // Changing reference type of this.nums, by creating a new ref
    // const newNums = []
    // for(let v of this.nums)
    //   newNums.push(v)
    // this.nums = newNums

    // Push to front of array
    // this.nums.unshift($event)

    // ...spread operator (faster alt to recreating arr above)
    this.nums = [$event, ...this.nums]  // [newElement, {spreadedElements}]
  }

  square() {
    console.info("squaring")
    const currVal = this.numInput.value
    this.numInput.value = currVal * currVal

    // submit the addition
    this.numInput.process()
  }  
  negate() {
    console.info("negating")
    this.numInput.value = -this.numInput.value

    // submit the addition
    this.numInput.process()
  }
}

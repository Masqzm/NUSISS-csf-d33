import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-num-input',
  standalone: false,
  templateUrl: './num-input.component.html',
  styleUrl: './num-input.component.css'
})
export class NumInputComponent implements OnInit {
  private _instanceName = "nic"
  private _createdOn = new Date()
  private fb = inject(FormBuilder)
  protected form!: FormGroup

  // Getters & setters for component
  get instanceName(): string {
    return this._instanceName
  }
  @Input()
  set instanceName(name: string) {
    this._instanceName = name
  }

  get value():number {
    return this.form.value.num
  }
  set value(val: number) {
    this.form.get('num')?.setValue(val)
  }

  get createdOn(): string {
    return this._createdOn.toISOString()
  }

  @Output()
  private onNewNumber = new Subject<number>()

  ngOnInit(): void {
    // Init form
    this.form = this.fb.group({
      num: this.fb.control<number>(0)
    })
  }

  process() {
    //const value = this.form.get('num')?.value
    const value = this.form.value.num   // similar to above
    
    this.onNewNumber.next(value)

    this.form.reset()
  }
}

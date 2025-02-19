import { Component, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-num-input',
  standalone: false,
  templateUrl: './num-input.component.html',
  styleUrl: './num-input.component.css'
})
export class NumInputComponent implements OnInit {
  private fb = inject(FormBuilder)
  protected form!: FormGroup

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

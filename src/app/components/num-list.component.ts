import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-list',
  standalone: false,
  templateUrl: './num-list.component.html',
  styleUrl: './num-list.component.css'
})
export class NumListComponent implements OnInit {
  @Input()
  values: number[] = []

  total: number  = 0

  ngOnInit(): void {
    this.total = this.values.reduce((acc, v) => acc + v, 0) // 0 - acc init value (if not declared will defaults to 0)
  }
}

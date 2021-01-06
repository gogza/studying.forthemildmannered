import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantities',
  templateUrl: './quantities.component.html',
  styleUrls: ['./quantities.component.css']
})
export class QuantitiesComponent implements OnInit {
  @Input() quantities: any[]
  constructor() { }

  ngOnInit(): void {
  }

}

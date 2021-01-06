import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-past-papers',
  templateUrl: './past-papers.component.html',
  styleUrls: ['./past-papers.component.css']
})
export class PastPapersComponent implements OnInit {
  @Input() public pp
  public years: string[]
  constructor() { }

  ngOnInit(): void {
    this.years = Object.keys(this.pp).sort( (a,b) => {
      if (a > b) { return -1}
      if (a < b) { return 1}
      return 0
    } )
  }

}

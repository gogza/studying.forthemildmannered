import { Component, OnInit, Input } from '@angular/core';
import { RESOURCES } from '../models/resource';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() public notes: any[]
  public resolvedNotes: any[]

  constructor() { }

  ngOnInit(): void {
    this.resolvedNotes = this.notes.map(note => {
      const resource = RESOURCES[note.resourceId]
      const response = {
        source: resource.source,
        pages: note.pages,
      }
      if (resource.url) {
        response['url'] = resource.url
      }
      return response
    })
  }

}

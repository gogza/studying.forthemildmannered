import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course'
import { Topic } from '../models/topic'
import { ItemOfLearning } from '../models/item-of-learning'

@Component({
  selector: 'app-item-of-learning',
  templateUrl: './item-of-learning.component.html',
  styleUrls: ['./item-of-learning.component.css']
})
export class ItemOfLearningComponent implements OnInit {
  public course: Course
  public topic: Topic
  public iol: ItemOfLearning
  public prev: ItemOfLearning
  public next: ItemOfLearning

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.params['courseId']
    const topicId = this.route.snapshot.params['topicId']
    this.course = new Course(courseId)
    this.topic = new Topic(topicId, courseId)
    this.iol = new ItemOfLearning(this.route.snapshot.params['iolId'], topicId, courseId)
    if (this.iol.prev) {
      this.prev = new ItemOfLearning(this.iol.prev, topicId, courseId)
    }
    if (this.iol.next) {
      this.next = new ItemOfLearning(this.iol.next, topicId, courseId)
    }
  }

}

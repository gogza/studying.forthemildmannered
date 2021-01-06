import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course'
import { Topic } from '../models/topic'


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  public course: Course
  public topic: Topic

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.params['courseId']
    this.course = new Course(courseId)
    this.topic = new Topic(this.route.snapshot.params['topicId'], courseId)
  }

}

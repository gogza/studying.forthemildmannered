import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component'
import { TopicComponent } from './topic/topic.component'
import { ItemOfLearningComponent } from './item-of-learning/item-of-learning.component'
import { ExampleComponent } from './example/example.component'

const routes: Routes = [
  {path: 'course/:courseId/topic/:topicId/iol/:iolId/example/:exampleId', component: ExampleComponent},
  {path: 'course/:courseId/topic/:topicId/iol/:iolId', component: ItemOfLearningComponent},
  {path: 'course/:courseId/topic/:topicId', component: TopicComponent},
  {path: 'course/:courseId', component: CourseComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TopicComponent } from './topic/topic.component';
import { ItemOfLearningComponent } from './item-of-learning/item-of-learning.component';
import { ExampleComponent } from './example/example.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TopicComponent,
    ItemOfLearningComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

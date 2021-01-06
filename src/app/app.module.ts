import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TopicComponent } from './topic/topic.component';
import { ItemOfLearningComponent } from './item-of-learning/item-of-learning.component';
import { ExampleComponent } from './example/example.component';
import { PastPapersComponent } from './past-papers/past-papers.component';
import { NotesComponent } from './notes/notes.component';
import { QuantityComponent } from './quantity/quantity.component';
import { QuantitiesComponent } from './quantities/quantities.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TopicComponent,
    ItemOfLearningComponent,
    ExampleComponent,
    PastPapersComponent,
    NotesComponent,
    QuantityComponent,
    QuantitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

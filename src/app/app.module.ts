import { PostsComponent } from './httpservices/posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './reactiveforms/signupform.component';
import { ContactForm } from './customforms/contact-forms.component';
import { SearchComponent } from './search/search.component';
import { DirectivesDemoComponent } from './directives/directivesdemo.component';
import { LikeComponent } from './like/like.component';
import { PanelComponent } from './panel/panel.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './pipes/summary.pipes';
import { PipesComponent } from './pipes/pipes.component';
import { CoursesService } from './courses/courses.service';
import { CoursesComponent } from './courses/courses.component';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    PipesComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    DirectivesDemoComponent,
    SearchComponent,
    ContactForm,
    SignupFormComponent,
    PostsComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionsComponent } from './quiz/quiz-questions/quiz-questions.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { SharedServices } from '../app/shared/shared.services';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizQuestionsComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule
  ],
  providers: [SharedServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

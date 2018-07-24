import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TrueFalseComponent } from './quiz-question-types/true-false/true-false.component';
import { MultipleChoiceComponent } from './quiz-question-types/multiple-choice/multiple-choice.component';
import { MultipleResponseComponent } from './quiz-question-types/multiple-response/multiple-response.component';
import { FillInTheBlanksComponent } from './quiz-question-types/fill-in-the-blanks/fill-in-the-blanks.component';
import { MedicalCaseComponent } from './quiz-question-types/medical-case/medical-case.component';
import { ClinicalSymptomsComponent } from './quiz-question-types/clinical-symptoms/clinical-symptoms.component';
import { GraphicOptionsComponent } from './quiz-question-types/graphic-options/graphic-options.component';
import { DragAndDropComponent } from './quiz-question-types/drag-and-drop/drag-and-drop.component';
import { HotSpotComponent } from './quiz-question-types/hot-spot/hot-spot.component';
import { FigureLabelingExerciseComponent } from './quiz-question-types/figure-labeling-exercise/figure-labeling-exercise.component';
import { InlineChoiceComponent } from './quiz-question-types/inline-choice/inline-choice.component';
import { FooterComponent } from './core/footer/footer.component';
 import { SharedService } from './shared/shared.service';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    TrueFalseComponent,
    MultipleChoiceComponent,
    MultipleResponseComponent,
    FillInTheBlanksComponent,
    MedicalCaseComponent,
    ClinicalSymptomsComponent,
    GraphicOptionsComponent,
    DragAndDropComponent,
    HotSpotComponent,
    FigureLabelingExerciseComponent,
    InlineChoiceComponent,
    routingComponents,
    FooterComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

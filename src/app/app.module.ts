import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { MultipleResponseComponent } from './multiple-response/multiple-response.component';
import { FillInTheBlanksComponent } from './fill-in-the-blanks/fill-in-the-blanks.component';
import { MedicalCaseComponent } from './medical-case/medical-case.component';
import { ClinicalSymptomsComponent } from './clinical-symptoms/clinical-symptoms.component';
import { GraphicOptionsComponent } from './graphic-options/graphic-options.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { HotSpotComponent } from './hot-spot/hot-spot.component';
import { FigureLabelingExerciseComponent } from './figure-labeling-exercise/figure-labeling-exercise.component';
import { InlineChoiceComponent } from './inline-choice/inline-choice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared/shared.service';

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
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

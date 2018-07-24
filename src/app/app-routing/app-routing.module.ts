import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalSymptomsComponent } from '../quiz-question-types/clinical-symptoms/clinical-symptoms.component';
import { FillInTheBlanksComponent } from '../quiz-question-types/fill-in-the-blanks/fill-in-the-blanks.component';
import { TrueFalseComponent } from '../quiz-question-types/true-false/true-false.component';
import { MultipleChoiceComponent } from '../quiz-question-types/multiple-choice/multiple-choice.component';
import { MultipleResponseComponent } from '../quiz-question-types/multiple-response/multiple-response.component';
import { MedicalCaseComponent } from '../quiz-question-types/medical-case/medical-case.component';
import { GraphicOptionsComponent } from '../quiz-question-types/graphic-options/graphic-options.component';
import { DragAndDropComponent } from '../quiz-question-types/drag-and-drop/drag-and-drop.component';
import { HotSpotComponent } from '../quiz-question-types/hot-spot/hot-spot.component';
import { FigureLabelingExerciseComponent } from '../quiz-question-types/figure-labeling-exercise/figure-labeling-exercise.component';
import { InlineChoiceComponent } from '../quiz-question-types/inline-choice/inline-choice.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'FillInTheBlanks',
    pathMatch: 'full'
  },
  {path: 'ClinicalSymptoms', component: ClinicalSymptomsComponent},
  {path: 'FillInTheBlanks', component: FillInTheBlanksComponent},
  {path: 'TrueFalse', component: TrueFalseComponent},
  {path: 'MultipleChoice', component: MultipleChoiceComponent},
  {path: 'MultipleResponse', component: MultipleResponseComponent},
  {path: 'MedicalCase', component: MedicalCaseComponent},
  {path: 'GraphicOptions', component: GraphicOptionsComponent},
  {path: 'DragAndDrop', component: DragAndDropComponent},
  {path: 'HotSpot', component: HotSpotComponent},
  {path: 'FigureLabelingExercise', component: FigureLabelingExerciseComponent},
  {path: 'InlineChoice', component: InlineChoiceComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents =  [ TrueFalseComponent, ClinicalSymptomsComponent,  FillInTheBlanksComponent,
  MultipleChoiceComponent, MultipleResponseComponent, MedicalCaseComponent, GraphicOptionsComponent,
  DragAndDropComponent, HotSpotComponent, FigureLabelingExerciseComponent, InlineChoiceComponent];

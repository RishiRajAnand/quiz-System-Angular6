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
import { CoreComponent } from '../core/core.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouteResolver } from './route.resolver';
const routes: Routes = [
  {
    path: 'QuizCore',
    component: CoreComponent,
    children: [
      { path: 'ClinicalSymptoms', component: ClinicalSymptomsComponent, resolve: { message: RouteResolver } },
      { path: 'FillInTheBlanks', component: FillInTheBlanksComponent, resolve: { message: RouteResolver } },
      { path: 'TrueFalse', component: TrueFalseComponent, resolve: { message: RouteResolver } },
      { path: 'MultipleChoice', component: MultipleChoiceComponent, resolve: { message: RouteResolver } },
      { path: 'MultipleResponse', component: MultipleResponseComponent, resolve: { message: RouteResolver } },
      { path: 'MedicalCase', component: MedicalCaseComponent, resolve: { message: RouteResolver } },
      { path: 'GraphicOptions', component: GraphicOptionsComponent, resolve: { message: RouteResolver } },
      { path: 'DragAndDrop', component: DragAndDropComponent, resolve: { message: RouteResolver } },
      { path: 'HotSpot', component: HotSpotComponent, resolve: { message: RouteResolver } },
      { path: 'FigureLabelingExercise', component: FigureLabelingExerciseComponent, resolve: { message: RouteResolver } },
      { path: 'InlineChoice', component: InlineChoiceComponent, resolve: { message: RouteResolver } },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    RouteResolver
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [TrueFalseComponent, ClinicalSymptomsComponent, FillInTheBlanksComponent,
  MultipleChoiceComponent, MultipleResponseComponent, MedicalCaseComponent, GraphicOptionsComponent,
  DragAndDropComponent, HotSpotComponent, FigureLabelingExerciseComponent, InlineChoiceComponent,
  CoreComponent, HeaderComponent, FooterComponent];

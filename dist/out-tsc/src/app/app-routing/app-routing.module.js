"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var clinical_symptoms_component_1 = require("../quiz-question-types/clinical-symptoms/clinical-symptoms.component");
var fill_in_the_blanks_component_1 = require("../quiz-question-types/fill-in-the-blanks/fill-in-the-blanks.component");
var true_false_component_1 = require("../quiz-question-types/true-false/true-false.component");
var multiple_choice_component_1 = require("../quiz-question-types/multiple-choice/multiple-choice.component");
var multiple_response_component_1 = require("../quiz-question-types/multiple-response/multiple-response.component");
var medical_case_component_1 = require("../quiz-question-types/medical-case/medical-case.component");
var graphic_options_component_1 = require("../quiz-question-types/graphic-options/graphic-options.component");
var drag_and_drop_component_1 = require("../quiz-question-types/drag-and-drop/drag-and-drop.component");
var hot_spot_component_1 = require("../quiz-question-types/hot-spot/hot-spot.component");
var figure_labeling_exercise_component_1 = require("../quiz-question-types/figure-labeling-exercise/figure-labeling-exercise.component");
var inline_choice_component_1 = require("../quiz-question-types/inline-choice/inline-choice.component");
var routes = [
    {
        path: '',
        redirectTo: 'FillInTheBlanks',
        pathMatch: 'full'
    },
    { path: 'ClinicalSymptoms', component: clinical_symptoms_component_1.ClinicalSymptomsComponent },
    { path: 'FillInTheBlanks', component: fill_in_the_blanks_component_1.FillInTheBlanksComponent },
    { path: 'TrueFalse', component: true_false_component_1.TrueFalseComponent },
    { path: 'MultipleChoice', component: multiple_choice_component_1.MultipleChoiceComponent },
    { path: 'MultipleResponse', component: multiple_response_component_1.MultipleResponseComponent },
    { path: 'MedicalCase', component: medical_case_component_1.MedicalCaseComponent },
    { path: 'GraphicOptions', component: graphic_options_component_1.GraphicOptionsComponent },
    { path: 'DragAndDrop', component: drag_and_drop_component_1.DragAndDropComponent },
    { path: 'HotSpot', component: hot_spot_component_1.HotSpotComponent },
    { path: 'FigureLabelingExercise', component: figure_labeling_exercise_component_1.FigureLabelingExerciseComponent },
    { path: 'InlineChoice', component: inline_choice_component_1.InlineChoiceComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [true_false_component_1.TrueFalseComponent, clinical_symptoms_component_1.ClinicalSymptomsComponent, fill_in_the_blanks_component_1.FillInTheBlanksComponent,
    multiple_choice_component_1.MultipleChoiceComponent, multiple_response_component_1.MultipleResponseComponent, medical_case_component_1.MedicalCaseComponent, graphic_options_component_1.GraphicOptionsComponent,
    drag_and_drop_component_1.DragAndDropComponent, hot_spot_component_1.HotSpotComponent, figure_labeling_exercise_component_1.FigureLabelingExerciseComponent, inline_choice_component_1.InlineChoiceComponent];
//# sourceMappingURL=app-routing.module.js.map
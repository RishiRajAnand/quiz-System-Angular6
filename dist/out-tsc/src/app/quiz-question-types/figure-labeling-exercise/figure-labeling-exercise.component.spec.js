"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var figure_labeling_exercise_component_1 = require("./figure-labeling-exercise.component");
describe('FigureLabelingExerciseComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [figure_labeling_exercise_component_1.FigureLabelingExerciseComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(figure_labeling_exercise_component_1.FigureLabelingExerciseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=figure-labeling-exercise.component.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var clinical_symptoms_component_1 = require("./clinical-symptoms.component");
describe('ClinicalSymptomsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [clinical_symptoms_component_1.ClinicalSymptomsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(clinical_symptoms_component_1.ClinicalSymptomsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=clinical-symptoms.component.spec.js.map
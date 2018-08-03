"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var fill_in_the_blanks_component_1 = require("./fill-in-the-blanks.component");
describe('FillInTheBlanksComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [fill_in_the_blanks_component_1.FillInTheBlanksComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(fill_in_the_blanks_component_1.FillInTheBlanksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fill-in-the-blanks.component.spec.js.map
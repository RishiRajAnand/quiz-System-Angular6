"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorise_route_service_1 = require("./authorise-route.service");
describe('AuthoriseRouteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authorise_route_service_1.AuthoriseRouteService]
        });
    });
    it('should be created', testing_1.inject([authorise_route_service_1.AuthoriseRouteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authorise-route.service.spec.js.map
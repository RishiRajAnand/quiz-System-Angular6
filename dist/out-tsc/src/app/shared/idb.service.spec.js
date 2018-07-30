"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var idb_service_1 = require("./idb.service");
describe('IdbService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [idb_service_1.IdbService]
        });
    });
    it('should be created', testing_1.inject([idb_service_1.IdbService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=idb.service.spec.js.map
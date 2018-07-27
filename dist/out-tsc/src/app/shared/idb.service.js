"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JsStore = require("jsstore");
var workerPath = require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
console.log("worker path ", workerPath);
var IdbService = /** @class */ (function () {
    function IdbService() {
    }
    //constructor() { }
    // this will make sure that we are using one instance or one connection
    // otherwise multiple instance will be created and thus multiple worker and that may create some problems
    IdbService.idbCon = new JsStore.Instance(new Worker(workerPath));
    IdbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], IdbService);
    return IdbService;
}());
exports.IdbService = IdbService;
//# sourceMappingURL=idb.service.js.map
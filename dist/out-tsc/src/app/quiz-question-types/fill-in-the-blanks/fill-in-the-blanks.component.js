"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_service_1 = require("../../shared/shared.service");
var FillInTheBlanksComponent = /** @class */ (function () {
    function FillInTheBlanksComponent(sharedService) {
        this.sharedService = sharedService;
        this.getJsonFile();
    }
    FillInTheBlanksComponent.prototype.ngOnInit = function () {
        this.sharedService.seconds = 0;
        this.sharedService.qnProgress = 0;
    };
    FillInTheBlanksComponent.prototype.getJsonFile = function () {
        var _this = this;
        this.sharedService.getJSON().subscribe(function (data) {
            _this.sharedService.qns = data['items'];
            console.log('data>>>', _this.sharedService.qns);
        });
    };
    FillInTheBlanksComponent.prototype.startTimer = function () {
        var _this = this;
        this.sharedService.timer = setInterval(function () {
            _this.sharedService.seconds++;
        }, 1000);
    };
    FillInTheBlanksComponent = __decorate([
        core_1.Component({
            selector: 'app-fill-in-the-blanks',
            templateUrl: './fill-in-the-blanks.component.html',
            styleUrls: ['./fill-in-the-blanks.component.css']
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], FillInTheBlanksComponent);
    return FillInTheBlanksComponent;
}());
exports.FillInTheBlanksComponent = FillInTheBlanksComponent;
//# sourceMappingURL=fill-in-the-blanks.component.js.map
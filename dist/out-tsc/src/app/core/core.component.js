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
var indexed_db_service_1 = require("../shared/indexed-db.service");
var wk_quiz_1 = require("../model/wk-quiz");
var CoreComponent = /** @class */ (function () {
    function CoreComponent(service) {
        this.students = [];
        this.newStudent = new wk_quiz_1.WkQuiz();
        this.oldStudent = new wk_quiz_1.WkQuiz();
        this.service = service;
    }
    CoreComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    CoreComponent.prototype.getStudents = function () {
        var _this = this;
        this.service.getStudents().
            then(function (students) {
            _this.students = students;
        }).catch(function (error) {
            console.error(error);
            alert(error.message);
        });
    };
    CoreComponent.prototype.addStudent = function () {
        var _this = this;
        this.service.addStudent(this.newStudent).
            then(function (addedStudents) {
            if (addedStudents.length > 0) {
                _this.students.push(addedStudents[0]);
                _this.clearNewStudent();
                alert('Successfully added');
            }
        }).catch(function (error) {
            console.error(error);
            alert(error.message);
        });
    };
    CoreComponent.prototype.clearNewStudent = function () {
        this.newStudent = new wk_quiz_1.WkQuiz();
    };
    CoreComponent.prototype.deleteStudent = function (studentId) {
        var _this = this;
        this.service.deleteStudent(studentId).
            then(function (rowsDeleted) {
            if (rowsDeleted > 0) {
                var index = _this.students.findIndex(function (student) { return student.id === studentId; });
                _this.students.splice(index, 1);
                alert('Successfully deleted');
            }
        }).catch(function (error) {
            console.error(error);
            alert(error.message);
        });
    };
    CoreComponent.prototype.getStudent = function (studentId) {
        var _this = this;
        this.service.getStudent(studentId).
            then(function (students) {
            if (students.length > 0) {
                _this.oldStudent = students[0];
            }
        }).catch(function (error) {
            console.error(error);
            alert(error.message);
        });
    };
    CoreComponent.prototype.updateData = function () {
        var _this = this;
        var updatedValue = {
            name: this.oldStudent.name,
            gender: this.oldStudent.gender,
            country: this.oldStudent.country,
            city: this.oldStudent.city
        };
        this.service.updateData(this.oldStudent.id, updatedValue).
            then(function (rowsUpdated) {
            if (rowsUpdated > 0) {
                var index = _this.students.findIndex(function (student) { return student.id === _this.oldStudent.id; });
                _this.students[index] = _this.oldStudent;
                _this.clearOldStudent();
                alert('Successfully updated');
            }
        }).catch(function (error) {
            console.error(error);
            alert(error.message);
        });
    };
    CoreComponent.prototype.clearOldStudent = function () {
        this.oldStudent = new wk_quiz_1.WkQuiz();
    };
    CoreComponent = __decorate([
        core_1.Component({
            selector: 'app-core',
            templateUrl: './core.component.html',
            styleUrls: ['./core.component.css'],
            providers: [indexed_db_service_1.IndexedDBService]
        }),
        __metadata("design:paramtypes", [indexed_db_service_1.IndexedDBService])
    ], CoreComponent);
    return CoreComponent;
}());
exports.CoreComponent = CoreComponent;
//# sourceMappingURL=core.component.js.map
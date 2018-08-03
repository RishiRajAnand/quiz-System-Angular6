import { SharedService } from '../shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexedDBService } from './indexed-db/idb-model.service';
import { WkQuiz, Quiz } from '../model/wk-quiz';
import { CoreService } from './core-service/core.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.css'],
    providers: [IndexedDBService]
})
export class CoreComponent implements OnInit {

    @ViewChild('h') headerComponent: HeaderComponent;
    headerConfiguration: any = {
        totalQuestions: 10,
        totalTime: 30,
        totalTimePerQuestion: 60
    };

    headerData = [{
        type: 'FILL',
        data: {
            question: 'I am fill in the blanks questions',
            answer: 'yes you are'
        }
    }, {
        type: 'MULTIPLE',
        data: {
            question: 'I am Multiple',
            answer: 'ofcourse you are'
        }
    }];
    quizJsonData: any;
    private service: IndexedDBService;
    students: any = [];
    cmn_asset_type: any = [];
    newStudent: any = new WkQuiz();
    oldStudent: any = new WkQuiz();
    routesData: any = [{
        type: 'trueFalse',
        url: 'TrueFalse',
        data: { name: 'akshay', id: 1 }
    },
    {
        type: 'fillinblanks',
        url: 'FillInTheBlanks',
        data: { name: 'rishi', id: 2 }
    },
    {
        type: 'multiplechoice',
        url: 'MultipleChoice',
        data: { name: 'suraj', id: 3 }
    }];

    constructor(private router: Router, private route: ActivatedRoute, service: IndexedDBService,
        private sharedService: SharedService, private coreService: CoreService) {
        this.service = service;
        // this.insertAssetType();
    }

    ngOnInit() {
        this.getStudents();
        // this.service.terminateDB();
        this.getJsonFile();
    }


    questionChanged(index) {
        if (this.headerData[index] !== null) {
            const routingInfo = this.giveRoutes(this.headerData[index].type);
            this.router.navigate([routingInfo.url], {
                relativeTo: this.route
            });

            this.headerComponent.changeQuestion(index);

        }
    }
    displayCounter(count) {
        console.log('count', count);
    }
    giveRoutes(type): any {
        switch (type) {
            case 'FILL':
                return { url: 'FillInTheBlanks' };
            case 'MULTIPLE':
                return { url: 'MultipleChoice' };
            case 'multiplechoice':
                return { url: 'MultipleChoice' };
            default:
                break;
        }
    }
    getJsonFile() {
        this.coreService.getJSON().subscribe(data => {
            this.quizJsonData = data['items'];
            console.log('data>>>', this.quizJsonData);
        });
    }
    getStudents() {
        this.service.getStudents().
            then(students => {
                this.students = students;
            }).catch(error => {
                console.error(error);
                alert(error.message);
            });
    }

    addStudent() {
        this.service.addStudent(this.newStudent).
            then((addedStudents: Quiz[]) => {
                if (addedStudents.length > 0) {
                    this.students.push(addedStudents[0]);
                    this.clearNewStudent();
                    alert('Successfully added');
                }
            }).catch(error => {
                console.error(error);
                alert(error.message);
            });
    }

    clearNewStudent() {
        this.newStudent = new WkQuiz();
    }

    deleteStudent(studentId) {
        this.service.deleteStudent(studentId).
            then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    const index = this.students.findIndex(student => student.id === studentId);
                    this.students.splice(index, 1);
                    alert('Successfully deleted');
                }
            }).catch(error => {
                console.error(error);
                alert(error.message);
            });
    }

    getStudent(studentId) {
        this.service.getStudent(studentId).
            then(students => {
                if (students.length > 0) {
                    this.oldStudent = students[0];
                }
            }).catch(error => {
                console.error(error);
                alert(error.message);
            });
    }

    updateStudent() {
        const updatedValue: Quiz = {
            name: this.oldStudent.name,
            gender: this.oldStudent.gender,
            country: this.oldStudent.country,
            city: this.oldStudent.city
        };
        this.service.updateData(this.oldStudent.id, updatedValue).
            then(rowsUpdated => {
                if (rowsUpdated > 0) {
                    const index = this.students.findIndex(student => student.id === this.oldStudent.id);
                    this.students[index] = this.oldStudent;
                    this.clearOldStudent();
                    alert('Successfully updated');
                }
            }).catch(error => {
                console.error(error);
                alert(error.message);
            });
    }

    clearOldStudent() {
        this.oldStudent = new WkQuiz();
    }


    // insertAssetType() {
    //   this.service.insertAssetType().
    //   then((insertAssetType: Quiz[]) => {
    //   if (insertAssetType.length > 0) {
    //     this.cmn_asset_type.push(insertAssetType[0]);
    //    // this.clearNewStudent();
    //     alert('Successfully inserted');
    //   }
    //   }).catch(error => {
    //   console.error(error);
    //   alert(error.message);
    //   });
    // }
}

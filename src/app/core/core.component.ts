import { Component, OnInit } from '@angular/core';
import { IndexedDBService } from '../shared/indexed-db.service';
import { WkQuiz , Quiz } from '../model/wk-quiz';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.css'],
    providers: [IndexedDBService]
})
export class CoreComponent implements OnInit {

    private service: IndexedDBService;       
    students: any  = [];
    newStudent: any = new WkQuiz();


    constructor(service: IndexedDBService) {
        this.service = service;
    }

    ngOnInit() { 
      this.getStudents();
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

}

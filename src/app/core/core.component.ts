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
    cmn_asset_type : any =[];
    newStudent: any = new WkQuiz();
    oldStudent: any = new WkQuiz();


    constructor(service: IndexedDBService) {
        this.service = service;
        //this.insertAssetType();
    }

    ngOnInit() { 
        this.getStudents();     
        //this.service.terminateDB();  
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

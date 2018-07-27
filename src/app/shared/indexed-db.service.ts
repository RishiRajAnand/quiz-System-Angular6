import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { WkQuiz , Quiz } from '../model/wk-quiz';

@Injectable({
    providedIn: 'root'
})

export class IndexedDBService extends BaseService {

    constructor() {
        super();
    }

    getStudents() {
        return this.connection.select({
          from: 'Students'
        });
    }

    
    addStudent(student: Quiz) {
        return this.connection.insert({
          into: 'Students',
          return: true, // as id is autoincrement, so we would like to    get the inserted value
          values: [student]
        });
    }
}



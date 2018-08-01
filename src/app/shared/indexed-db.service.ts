import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { WkQuiz , Quiz } from '../model/wk-quiz';
var SnakeCase = require('lodash.snakecase');


@Injectable({
    providedIn: 'root'
})

export class IndexedDBService extends BaseService {

    constructor() {
        super();
    }

    getStudents(tblName = 'Students') {
        return this.connection.select({
          from: tblName
        });
    }
    
    insertData(tblName,Value){
        var data = JSON.parse(JSON.stringify(Value));
        data = SnakeCase(data);
       
        return this.connection.insert({
          into: tblName,
          values: [Value],
          return: true // as id is autoincrement, so we would like to get the inserted value
        });
    }

    addStudent(student: Quiz) {
        return this.connection.insert({
          into: 'Students',
          return: true, // as id is autoincrement, so we would like to get the inserted value
          values: [student]
        });
    }

    deleteStudent(studentId: number) {
        return this.connection.remove({
          from: 'Students',
          where: {
            id: studentId
          }
        });
    }

    updateData(studentId: number, updateValue: Quiz) {
        return this.connection.update({
          in: 'Students',
          where: {
            id: studentId
          },
          set: updateValue
        });
    }
    
    getStudent(studentId: number) {
        return this.connection.select({
          from: 'Students',
          where: {
            id: studentId
          }
        });
    }

/*
    joinTbl(studentId: number){

        var joinLogic1 = {
            table1: {
                table : Students,
                id    : studentId
            },
            join: 'inner',
            table2: {
                table : Emp,
                id    : studentId
            },
            nextJoin: {
                table : CmnAsset,
                id    : studentId
            }
        };

        var joinLogic2 = {
            table1: joinLogic1
            join: 'inner',
            table2: {
                table: table3_name
                column: some_common_column of table3
            }
        };

        return this.connection.select({
            from: joinLogic2
        });
    }
*/
    /**
     * Drop Database
     */
    dropDatabase(){
        return this.connection.dropDb().then(function() {
            console.log('Db deleted successfully');
        }).catch(function(error) {
            console.log(error);
        });;
    }

    /**
     * Terminate the process
     */
    
    terminateDB(){
        return this.connection.terminate().then(function() {
            console.log("connection terminated");
        }).catch(function(error) {
            alert(error.message);
        });
    }  

    /**
     * Get record count of tables
     */
    getCount(){
       
       return this.connection.count({
            from: "cmn_asset_type"//,
            // where: {
            //     Column1: some_value,
            //     Column2: some_another_value
            // }
        }).then(function(results) {
            //results will be array of objects.
            console.log('total record count ' + results);
            //return results;
        }).catch(function(error) {
            console.log(error);
        });
    }
}



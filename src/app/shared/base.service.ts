import { Injectable } from '@angular/core';
import { IdbService } from './idb.service';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';

export class BaseService {

    dbname = 'wk_quizzing';

    constructor() {
        // turn on jsstore log status - help you to debug
        // turn it off in production or when you dont need
        this.connection.setLogStatus(true);
        this.initJsStore();
    }

    /**
     * DB Connection
     */
    get connection() {
        return IdbService.idbCon;
    }

    /**
     *  Create the database when it does not exist,
     *  otherwise open the db connection for the specified database name.
     */
    initJsStore() {
        this.connection.isDbExist(this.dbname).then(isExist => {
            if (isExist) {
                this.connection.openDb(this.dbname);
            } else {
                const dataBase = this.getDatabase();
                this.connection.createDb(dataBase);
            }
        }).catch(err => {
            // this will be fired when indexedDB is not supported.
            alert(err.message);
        });
    }

    /**
     * Creating table and adding columns to it with proper datatype
     */     
    private getDatabase() {
        const tblStudent: ITable = {
            name: 'Students',
            columns: [
                {
                    name: 'id',
                    primaryKey: true,
                    autoIncrement: true
                },
                {
                    name: 'name',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'gender',
                    dataType: DATA_TYPE.String,
                    default: 'male'
                },
                {
                    name: 'country',
                    notNull: true,
                    dataType: DATA_TYPE.String
                },
                {
                    name: 'city',
                    dataType: DATA_TYPE.String,
                    notNull: true
                }
            ]
        };
        
        const dataBase: IDataBase = {
            name: this.dbname,
            tables: [tblStudent]
        };
        return dataBase;
    }
}
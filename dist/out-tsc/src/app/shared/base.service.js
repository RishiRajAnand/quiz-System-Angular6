"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idb_service_1 = require("./idb.service");
var jsstore_1 = require("jsstore");
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.dbname = 'wk_quizzing';
        // turn on jsstore log status - help you to debug
        // turn it off in production or when you dont need
        this.connection.setLogStatus(true);
        this.initJsStore();
    }
    Object.defineProperty(BaseService.prototype, "connection", {
        /**
         * DB Connection
         */
        get: function () {
            return idb_service_1.IdbService.idbCon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Create the database when it does not exist,
     *  otherwise open the db connection for the specified database name.
     */
    BaseService.prototype.initJsStore = function () {
        var _this = this;
        this.connection.isDbExist(this.dbname).then(function (isExist) {
            if (isExist) {
                _this.connection.openDb(_this.dbname);
            }
            else {
                var dataBase = _this.getDatabase();
                _this.connection.createDb(dataBase);
            }
        }).catch(function (err) {
            // this will be fired when indexedDB is not supported.
            alert(err.message);
        });
    };
    /**
     * Creating table and adding columns to it with proper datatype
     */
    BaseService.prototype.getDatabase = function () {
        var tblStudent = {
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
                    dataType: jsstore_1.DATA_TYPE.String
                },
                {
                    name: 'gender',
                    dataType: jsstore_1.DATA_TYPE.String,
                    default: 'male'
                },
                {
                    name: 'country',
                    notNull: true,
                    dataType: jsstore_1.DATA_TYPE.String
                },
                {
                    name: 'city',
                    dataType: jsstore_1.DATA_TYPE.String,
                    notNull: true
                }
            ]
        };
        var dataBase = {
            name: this.dbname,
            tables: [tblStudent]
        };
        return dataBase;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
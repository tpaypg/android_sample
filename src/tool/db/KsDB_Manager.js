"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsDB_Manager = void 0;
var KsDB_Manager = /** @class */ (function () {
    function KsDB_Manager() {
    }
    KsDB_Manager.prototype.m_toDB_getAryDBD = function (aryResultPool, query) {
        return __awaiter(this, void 0, void 0, function () {
            var KsDbConnecter, mariaDB, resultAry, i_ins, error_1, resultObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_toDB_getAryDBD()");
                        KsDbConnecter = require('./connecter/KsDB_Connecter');
                        return [4 /*yield*/, KsDbConnecter.getConnection()];
                    case 1:
                        mariaDB = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 6, 7]);
                        return [4 /*yield*/, this.m_query_getAryDBD(mariaDB, query, true)];
                    case 3:
                        resultAry = _a.sent();
                        console.log("## Result : " + resultAry.length);
                        for (i_ins = 0; i_ins < resultAry.length; i_ins++) {
                            aryResultPool.push(resultAry[i_ins]);
                        }
                        return [3 /*break*/, 7];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [4 /*yield*/, mariaDB.rollback()];
                    case 5:
                        _a.sent();
                        resultObject = new Object();
                        console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
                        resultObject.rec = 400;
                        resultObject.rem = "FATAL ERROR";
                        aryResultPool.push(resultObject);
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            mariaDB.release();
                            mariaDB.destroy();
                        }
                        catch (error) {
                            console.log("!! ################## FATAL ERROR" + error);
                        }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsDB_Manager.prototype.m_query_getAryDBD = function (mariaDBConnection, query, noMatter) {
        return __awaiter(this, void 0, void 0, function () {
            var result, resultAryDBD;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_query_getAryDBD()");
                        return [4 /*yield*/, this.m_query(mariaDBConnection, query)];
                    case 1:
                        result = _a.sent();
                        if (result == null)
                            return [2 /*return*/, []];
                        resultAryDBD = result[0];
                        this.m_sys_setResult200OK_forAryDBD(mariaDBConnection, resultAryDBD);
                        return [2 /*return*/, resultAryDBD];
                }
            });
        });
    };
    KsDB_Manager.prototype.m_query_getOneDBD = function (mariaDBConnection, query, isErrorIfNotOneResult) {
        return __awaiter(this, void 0, void 0, function () {
            var result, resultDBD, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_query_getOneDBD()");
                        return [4 /*yield*/, this.m_query(mariaDBConnection, query)];
                    case 1:
                        result = _a.sent();
                        if (result == null)
                            return [2 /*return*/, resultDBD];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 3, 5, 6]);
                        if (result[0].length == 1) {
                            resultDBD = result[0][0];
                            resultDBD.rec = 200;
                            resultDBD.rem = "OK";
                        }
                        else if (result[0].length == 0) {
                            resultDBD = new Object();
                            //resultObject.uid = uid;
                            console.log("#### NORMAL ERROR ####");
                            resultDBD.rec = 201;
                            resultDBD.rem = "NOT CURRENT";
                        }
                        else if (result[0].length > 1 && !isErrorIfNotOneResult) {
                            resultDBD = result[0][0];
                            resultDBD.rec = 200;
                            resultDBD.rem = "OK";
                        }
                        else {
                            resultDBD = new Object();
                            //resultObject.uid = uid;
                            console.log("#### FATAL ERROR ####          !!!!!! - DUPLICATE USER");
                            resultDBD.rec = 410;
                            resultDBD.rem = "FATAL ERROR - DUPLICATE USER";
                        }
                        return [3 /*break*/, 6];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [4 /*yield*/, mariaDBConnection.rollback()];
                    case 4:
                        _a.sent();
                        resultDBD = new Object();
                        console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
                        resultDBD.rec = 400;
                        resultDBD.rem = "FATAL ERROR";
                        return [3 /*break*/, 6];
                    case 5: return [7 /*endfinally*/];
                    case 6: return [2 /*return*/, resultDBD];
                }
            });
        });
    };
    KsDB_Manager.prototype.m_query = function (mariaDBConnection, query) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_query()");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 7, 8]);
                        return [4 /*yield*/, mariaDBConnection.beginTransaction()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, mariaDBConnection.execute(query)];
                    case 3:
                        result = _a.sent();
                        return [4 /*yield*/, mariaDBConnection.commit()];
                    case 4:
                        _a.sent();
                        console.log("## m_query() - RESULT InsertId : " + result.insertId);
                        console.log("## m_query() - RESULT COUNT : " + result[0].length);
                        return [3 /*break*/, 8];
                    case 5:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [4 /*yield*/, mariaDBConnection.rollback()];
                    case 6:
                        _a.sent();
                        console.log("## m_query() - #### FATAL ERROR ####          !!!!!! - DB CRUSH");
                        result = null;
                        return [3 /*break*/, 8];
                    case 7:
                        mariaDBConnection.release();
                        mariaDBConnection.destroy();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, result];
                }
            });
        });
    };
    KsDB_Manager.prototype.m_sys_setResult200OK_forAryDBD = function (mariaDBConnection, resultAryDBD) {
        return __awaiter(this, void 0, void 0, function () {
            var i_ins, oneDBD, error_4, MsStore_DBD, oneDBD;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_sys_setResult200OK_forAryDBD()");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 2, 4, 5]);
                        for (i_ins = 0; i_ins < resultAryDBD.length; i_ins++) {
                            oneDBD = resultAryDBD[i_ins];
                            oneDBD.rec = 200;
                            oneDBD.rem = "OK";
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [4 /*yield*/, mariaDBConnection.rollback()];
                    case 3:
                        _a.sent();
                        MsStore_DBD = require('./../../MsTools_Script/tool/base/MsStore_DBD');
                        oneDBD = new MsStore_DBD.MsStore_DBD();
                        console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
                        oneDBD.rec = 400;
                        oneDBD.rem = "FATAL ERROR";
                        resultAryDBD = [oneDBD];
                        return [3 /*break*/, 5];
                    case 4:
                        mariaDBConnection.release();
                        mariaDBConnection.destroy();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return KsDB_Manager;
}());
exports.KsDB_Manager = KsDB_Manager;

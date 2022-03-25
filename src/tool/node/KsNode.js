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
exports.KsNode = void 0;
var KsNode = /** @class */ (function () {
    function KsNode() {
    }
    KsNode.prototype.isRequestParam = function (returnsArray, param, rem, rec) {
        var KST = require("./../base/KST");
        if (KST.KST.isEmpty(param)) {
            if (rem == null || rem == undefined)
                rem = "필수파라미터 누락.";
            if (rec == null || rec == undefined)
                rec = 400;
            this.sys_returnsDBD(returnsArray, rem, rec);
            return false;
        }
        return true;
    };
    KsNode.prototype.isHaveResult = function (destArray, rem, rec) {
        if (destArray == null || destArray == undefined)
            return false;
        if (destArray.length == 0) {
            if (rem == null || rem == undefined)
                rem = "조회 결과 없음.";
            if (rec == null || rec == undefined)
                rec = 400;
            this.sys_returnsDBD(destArray, rem, rec);
            return false;
        }
        return true;
    };
    KsNode.prototype.isEqual = function (returnsArray, param0, param1, rem, rec) {
        var KST = require("./../base/KST");
        if (KST.KST.isEmpty(param0) || KST.KST.isEmpty(param1) || !KST.KST.isEqual(param0, param1)) {
            if (rem == null || rem == undefined)
                rem = "입력값이 부정확합니다.";
            if (rec == null || rec == undefined)
                rec = 400;
            this.sys_returnsDBD(returnsArray, rem, rec);
            return false;
        }
        return true;
    };
    KsNode.prototype.sys_returnsDBD = function (returnArray, rem, rec) {
        var MsDBD = require("./../dbd/MsDBD");
        var error = new MsDBD.MsDBD;
        error.rec = rec;
        error.rem = rem;
        returnArray.splice(0, returnArray.length);
        returnArray.push(error);
    };
    KsNode.prototype.DB_getDBD_byTkn = function (aryResultPool, tnm, tkn) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE tkn = '" + tkn + "';";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byUid = function (aryResultPool, tnm, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE uid = '" + uid + "';";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byMid = function (aryResultPool, tnm, mid) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE mid = '" + mid + "';";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byDid = function (aryResultPool, tnm, did) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE did = '" + did + "';";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byLke = function (aryResultPool, tnm, lke) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE lke = " + lke + ";";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byNid_levOver = function (aryResultPool, tnm, nid, lev) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM " + tnm + " WHERE nid = '" + nid + "' AND lev >= " + lev + ";";
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_getDBD_byNid = function (aryResultPool, tnm, nid, idx, max) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (idx == undefined || idx == null)
                            idx = 0;
                        if (max == undefined || max == null)
                            max = 20;
                        query = "SELECT * FROM " + tnm + " WHERE nid = '" + nid + "' order by mil desc Limit " + idx + ", " + max;
                        return [4 /*yield*/, this.DB_query(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, aryResultPool];
                }
            });
        });
    };
    KsNode.prototype.DB_query = function (aryResultPool, query) {
        return __awaiter(this, void 0, void 0, function () {
            var KsDBD_Manager, ksDbdManager, i_ins, oneDBD;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("## m_toDB() - Query : " + query);
                        KsDBD_Manager = require('./../db/KsDB_Manager');
                        ksDbdManager = new KsDBD_Manager.KsDB_Manager();
                        return [4 /*yield*/, ksDbdManager.m_toDB_getAryDBD(aryResultPool, query)];
                    case 1:
                        _a.sent();
                        for (i_ins = 0; i_ins < aryResultPool.length; i_ins++) {
                            oneDBD = aryResultPool[i_ins];
                            console.log("## RESULT UID : " + oneDBD.uid);
                            console.log("## RESULT MID : " + oneDBD.mid);
                            console.log("## RESULT PWD : " + oneDBD.pwd);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return KsNode;
}());
exports.KsNode = KsNode;

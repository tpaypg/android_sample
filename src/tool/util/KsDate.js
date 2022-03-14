"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsDate = void 0;
var KsDate = /** @class */ (function () {
    function KsDate() {
    }
    KsDate.prototype.m_getYYMMDD = function (date) {
        if (date == null || date == undefined)
            date = new Date();
        var YY = date.getFullYear().toString().slice(-2);
        var MM = ("0" + (1 + date.getMonth())).slice(-2);
        var DD = ("0" + date.getDate()).slice(-2);
        return YY + MM + DD;
    };
    KsDate.prototype.m_getYYMMDDhhmmss = function (date) {
        if (date == null || date == undefined)
            date = new Date();
        var YY = date.getFullYear().toString().slice(-2);
        var MM = ("0" + (1 + date.getMonth())).slice(-2);
        var DD = ("0" + date.getDate()).slice(-2);
        var hh = ("0" + date.getHours()).slice(-2);
        var mm = ("0" + date.getMinutes()).slice(-2);
        var ss = ("0" + date.getSeconds()).slice(-2);
        return YY + MM + DD + hh + mm + ss;
    };
    return KsDate;
}());
exports.KsDate = KsDate;

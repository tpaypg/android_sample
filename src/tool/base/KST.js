"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KST = void 0;
var KST = /** @class */ (function () {
    function KST() {
    }
    KST.isEmpty = function (src) {
        if (src == null || src == undefined || src.length == 0)
            return true;
        return false;
    };
    KST.isEqual = function (src0, str1) {
        if (src0 == str1)
            return true;
        return false;
    };
    return KST;
}());
exports.KST = KST;

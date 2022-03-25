"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KST_test = void 0;
var KST_test = /** @class */ (function () {
    function KST_test() {
    }
    KST_test.prototype.m_doTest = function () {
        console.log("-- Do KST_test --");
        var KST = require('./KST');
        var re = KST.KST.isEmpty("Ke");
        console.log("-- Do KST_test -- " + re);
    };
    return KST_test;
}());
exports.KST_test = KST_test;

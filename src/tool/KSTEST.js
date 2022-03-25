"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KSTEST = void 0;
var KSTEST = /** @class */ (function () {
    function KSTEST() {
    }
    KSTEST.prototype.m_doTest = function () {
        console.log("-- Do Test --");
        this.test_KST();
    };
    KSTEST.prototype.test_KST = function () {
        var KST_test = require("./base/KST_test");
        var test = new KST_test.KST_test();
        test.m_doTest();
    };
    return KSTEST;
}());
exports.KSTEST = KSTEST;

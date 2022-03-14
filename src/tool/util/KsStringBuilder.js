"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsStringBuilder = void 0;
var KsStringBuilder = /** @class */ (function () {
    function KsStringBuilder() {
        this.m_strings = [];
    }
    KsStringBuilder.prototype.append = function (str) {
        this.m_strings.push(str);
        return this;
    };
    KsStringBuilder.prototype.toString = function () {
        return this.m_strings.join("");
    };
    KsStringBuilder.prototype.clear = function () {
        this.m_strings.length = 0;
    };
    return KsStringBuilder;
}());
exports.KsStringBuilder = KsStringBuilder;

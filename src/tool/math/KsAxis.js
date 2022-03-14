"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsAxis = void 0;
var KsAxis = /** @class */ (function () {
    function KsAxis() {
    }
    KsAxis.prototype.m_getPoint_XtoL = function (orgX, orgY, moveLenth, moveAngle) {
        var returns = [
            (moveLenth * Math.cos(moveAngle * Math.PI / 180)) + orgX,
            (moveLenth * Math.sin(-moveAngle * Math.PI / 180)) + orgY
        ];
        return returns;
    };
    KsAxis.prototype.m_getPoint_YtoR = function (orgX, orgY, moveLenth, moveAngle) {
        moveAngle -= 90;
        moveAngle = this.m_getAngleAbs(moveAngle);
        var returns = [
            (moveLenth * Math.cos(moveAngle * Math.PI / 180)) + orgX,
            (moveLenth * Math.sin(moveAngle * Math.PI / 180)) + orgY
        ];
        return returns;
    };
    KsAxis.prototype.m_getAngleAbs = function (angle0) {
        if (angle0 < 0)
            angle0 += 360;
        angle0 %= 360;
        return angle0;
    };
    return KsAxis;
}());
exports.KsAxis = KsAxis;

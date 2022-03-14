"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsJTNet_UtilDocu = void 0;
var KsJTNet_UtilDocu = /** @class */ (function () {
    function KsJTNet_UtilDocu() {
    }
    KsJTNet_UtilDocu.prototype.m_getHeader = function (docuID4Len) {
        var KsDate = require('./../ksnode/util/KsDate');
        var ksDate = new KsDate.KsDate();
        var newDate = new Date();
        var yymmdd = ksDate.m_getYYMMDD(newDate);
        var yymmddhhmmss = ksDate.m_getYYMMDDhhmmss(newDate);
        var idx = 0;
        var docu_header_temp = [];
        docu_header_temp[idx++] = docuID4Len;
        docu_header_temp[idx++] = "1802100001"; //단말기 번호.
        docu_header_temp[idx++] = (yymmdd + "000001").padStart(12, "0"); //
        docu_header_temp[idx++] = "1100110001"; //하드코딩 S/W 버전
        docu_header_temp[idx++] = "PF19080001"; //하드코딩 H/W 버전
        docu_header_temp[idx++] = "####PF-5300B1003JTTPAYMOBADR1003"; //KTC인증번호
        docu_header_temp[idx++] = yymmddhhmmss.padEnd(12, " "); //전문 전송 일자
        docu_header_temp[idx++] = "     ";
        docu_header_temp[idx++] = "R";
        var docu_header = docu_header_temp.join('');
        return docu_header;
    };
    KsJTNet_UtilDocu.prototype.m_getDocu_findAppCardID = function (track2) {
        var ByteBuffer = require("bytebuffer");
        var docu_header = this.m_getHeader("8099");
        var idx = 0;
        var docu_body_temp = [];
        docu_body_temp[idx++] = "Q";
        docu_body_temp[idx++] = ("00" + track2).padEnd(100, " "); // 카드번호.
        docu_body_temp[idx++] = "".padEnd(128, " ");
        var docu_body = docu_body_temp.join('');
        var bb = new ByteBuffer();
        bb.writeByte(0x02);
        bb.writeString(("" + (22 + docu_header.length + docu_body.length)).padStart(4, "0"));
        bb.writeByte(0x12);
        bb.writeByte(0x12);
        bb.writeString("PFC");
        bb.writeString("1.01.001");
        bb.writeString(" ");
        bb.writeString(" ");
        bb.writeString(docu_header);
        bb.writeString(docu_body);
        bb.writeByte(0x0d);
        bb.writeByte(0x03);
        bb.flip();
        console.log("Header Len : " + docu_header.length);
        console.log("Len : " + bb.toArrayBuffer().byteLength);
        console.log("LenD: " + (bb.toArrayBuffer().byteLength - (docu_header.length + docu_body.length)));
        return Buffer.from(bb.toArrayBuffer());
    };
    KsJTNet_UtilDocu.prototype.m_getDocu_Auth = function (track2, kindOfTrack2, priceGood, priceTax, priceTFree, priceTips) {
        var ByteBuffer = require("bytebuffer");
        var docu_header = this.m_getHeader("1010");
        var idx = 0;
        var docu_body_temp = [];
        docu_body_temp[idx++] = "Q";
        docu_body_temp[idx++] = ("00" + track2).padEnd(100, " "); // 카드번호.
        docu_body_temp[idx++] = "00"; //할부개월
        docu_body_temp[idx++] = ("" + priceGood).padStart(9, "0"); //goods Price
        docu_body_temp[idx++] = ("" + priceTax).padStart(9, "0"); //Tax
        docu_body_temp[idx++] = ("" + priceTips).padStart(9, "0"); //Service
        docu_body_temp[idx++] = "KRW";
        docu_body_temp[idx++] = "".padEnd(6, " "); //원거래일자
        docu_body_temp[idx++] = "".padEnd(12, " "); //원승인번호
        docu_body_temp[idx++] = "".padEnd(12, " "); //원거래고유번호
        docu_body_temp[idx++] = "N  ";
        docu_body_temp[idx++] = "  ";
        docu_body_temp[idx++] = ("" + kindOfTrack2).padEnd(8, " ");
        docu_body_temp[idx++] = ("" + priceTFree).padStart(9, "0");
        docu_body_temp[idx++] = "".padEnd(18, " ");
        docu_body_temp[idx++] = "".padEnd(24, " ");
        docu_body_temp[idx++] = "".padEnd(10, " ");
        docu_body_temp[idx++] = "MDcyMDAxMDEwAAAB".padEnd(16, " ");
        docu_body_temp[idx++] = "".padEnd(32, " ");
        docu_body_temp[idx++] = "".padEnd(128, " ");
        var docu_body = docu_body_temp.join('');
        idx = 0;
        var docu_sign_temp = [];
        docu_sign_temp[idx++] = "".padEnd(16, " ");
        docu_sign_temp[idx++] = "0000";
        var docu_sign = docu_sign_temp.join('');
        docu_sign = ""; //서명 없을시
        idx = 0;
        var docu_deviceid_temp = [];
        docu_deviceid_temp[idx++] = "MACADDRESS123123".padEnd(42, " ");
        var docu_deviceid = docu_deviceid_temp.join('');
        var bb = new ByteBuffer();
        bb.writeByte(0x02);
        bb.writeString(("" + (25 + docu_header.length + docu_body.length + docu_sign.length + docu_deviceid.length)).padStart(4, "0"));
        bb.writeByte(0x12);
        bb.writeByte(0x12);
        bb.writeString("PFC");
        bb.writeString("1.01.001");
        bb.writeString(" ");
        bb.writeString(" ");
        bb.writeString(docu_header);
        bb.writeString(docu_body);
        bb.writeByte(0x1c);
        bb.writeString(docu_sign);
        bb.writeByte(0x1c);
        bb.writeByte(0x1c);
        bb.writeString(docu_deviceid);
        bb.writeByte(0x0d);
        bb.writeByte(0x03);
        bb.flip();
        // console.log("Len : " + bb.toArrayBuffer().byteLength);
        return Buffer.from(bb.toArrayBuffer());
    };
    KsJTNet_UtilDocu.prototype.m_getDocu_Cancel = function (track2, kindOfTrack2, priceGood, priceTax, priceTFree, priceTips, orgAppNo, orgAppTimeYYMMDD) {
        var ByteBuffer = require("bytebuffer");
        var docu_header = this.m_getHeader("1050");
        var idx = 0;
        var docu_body_temp = [];
        docu_body_temp[idx++] = "Q";
        docu_body_temp[idx++] = ("00" + track2).padEnd(100, " "); // 카드번호.
        docu_body_temp[idx++] = "00"; //할부개월
        docu_body_temp[idx++] = ("" + priceGood).padStart(9, "0"); //goods Price
        docu_body_temp[idx++] = ("" + priceTax).padStart(9, "0"); //Tax
        docu_body_temp[idx++] = ("" + priceTips).padStart(9, "0"); //Service
        docu_body_temp[idx++] = "KRW";
        docu_body_temp[idx++] = ("" + orgAppTimeYYMMDD).padEnd(6, ""); //원거래일자
        docu_body_temp[idx++] = ("" + orgAppNo).padEnd(12, ""); //원승인번호
        docu_body_temp[idx++] = "".padEnd(12, " "); //원거래고유번호
        docu_body_temp[idx++] = "N  ";
        docu_body_temp[idx++] = "  ";
        docu_body_temp[idx++] = ("" + kindOfTrack2).padEnd(8, " ");
        docu_body_temp[idx++] = ("" + priceTFree).padStart(9, "0");
        docu_body_temp[idx++] = "".padEnd(18, " ");
        docu_body_temp[idx++] = "".padEnd(24, " ");
        docu_body_temp[idx++] = "".padEnd(10, " ");
        docu_body_temp[idx++] = "MDcyMDAxMDEwAAAB".padEnd(16, " ");
        docu_body_temp[idx++] = "".padEnd(32, " ");
        docu_body_temp[idx++] = "".padEnd(128, " ");
        var docu_body = docu_body_temp.join('');
        idx = 0;
        var docu_sign_temp = [];
        docu_sign_temp[idx++] = "".padEnd(16, " ");
        docu_sign_temp[idx++] = "0000";
        var docu_sign = docu_sign_temp.join('');
        docu_sign = ""; //서명 없을시
        idx = 0;
        var docu_deviceid_temp = [];
        docu_deviceid_temp[idx++] = "MACADDRESS123123".padEnd(42, " ");
        var docu_deviceid = docu_deviceid_temp.join('');
        var bb = new ByteBuffer();
        bb.writeByte(0x02);
        bb.writeString(("" + (25 + docu_header.length + docu_body.length + docu_sign.length + docu_deviceid.length)).padStart(4, "0"));
        bb.writeByte(0x12);
        bb.writeByte(0x12);
        bb.writeString("PFC");
        bb.writeString("1.01.001");
        bb.writeString(" ");
        bb.writeString(" ");
        bb.writeString(docu_header);
        bb.writeString(docu_body);
        bb.writeByte(0x1c);
        bb.writeString(docu_sign);
        bb.writeByte(0x1c);
        bb.writeByte(0x1c);
        bb.writeString(docu_deviceid);
        bb.writeByte(0x0d);
        bb.writeByte(0x03);
        bb.flip();
        // console.log("Len : " + bb.toArrayBuffer().byteLength);
        return Buffer.from(bb.toArrayBuffer());
    };
    KsJTNet_UtilDocu.prototype.m_parser_Auth = function (vanResult) {
        console.log("################## VAN AUTH PARSER ################# ");
        console.log("ORG");
        console.log(typeof (vanResult));
        console.log(vanResult);
        var resultBody = vanResult.subarray(116);
        console.log("Cut Header");
        console.log(resultBody);
        var iconv = require('iconv-lite');
        var MsDBD = require('./../ksnode/dbd/MsDBD');
        var msdbd = new MsDBD.MsDBD;
        var temp;
        var temp_idx = 0;
        temp_idx = 4;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.res_cd = temp;
        console.log("응답코드 : " + temp);
        temp_idx = 36;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.res_mg = temp;
        if (msdbd.res_cd == "0000") {
            msdbd.app_no = temp.substring(0, 12);
            msdbd.app_tm = temp.substring(12, 24);
            msdbd.tran_un = temp.substring(24);
        }
        console.log("응답메시지 : " + temp);
        temp_idx = 15;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.mat_id = temp;
        console.log("가맹점번호 : " + temp);
        temp_idx = 4;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.isur_cd = temp;
        console.log("발급사코드 : " + temp);
        temp_idx = 20;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.card_nm = temp;
        msdbd.isur_nm = temp;
        console.log("발급사명 : " + temp);
        temp_idx = 4;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.acqu_cd = temp;
        console.log("매입사코드 : " + temp);
        temp_idx = 20;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.acqu_nm = temp;
        console.log("매입사명 : " + temp);
        temp_idx = 2;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.card_tp = temp;
        console.log("카드구분 : " + temp);
        temp_idx = 1;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_005 = temp;
        temp_idx = 1;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_006 = temp;
        temp_idx = 1;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_007 = temp;
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_008 = temp;
        console.log("할인금액 : " + temp);
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_009 = temp;
        console.log("발생포인트 : " + temp);
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_010 = temp;
        console.log("가용포인트 : " + temp);
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_011 = temp;
        console.log("누적포인트 : " + temp);
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_012 = temp;
        console.log("기프트잔액 : " + temp);
        temp_idx = 9;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_013 = temp;
        console.log("카드사포인트 : " + temp);
        temp_idx = 60;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_014 = temp;
        console.log("포인트정보 : " + temp);
        temp_idx = 16;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_015 = temp;
        console.log("부가정보1 : " + temp);
        temp_idx = 64;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_016 = temp;
        console.log("부가정보2 : " + temp);
        temp_idx = 128;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.v_017 = temp;
        console.log("부가정보3 : " + temp);
        temp_idx = 20;
        temp = iconv.decode(resultBody.subarray(0, temp_idx), 'euc-kr');
        resultBody = resultBody.subarray(temp_idx);
        msdbd.card_no = temp;
        console.log("카드번호 : " + temp);
        return msdbd;
    };
    return KsJTNet_UtilDocu;
}());
exports.KsJTNet_UtilDocu = KsJTNet_UtilDocu;

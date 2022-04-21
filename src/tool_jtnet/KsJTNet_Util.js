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
exports.KsJTNet_Util = void 0;
var KsJTNet_Util = /** @class */ (function () {
    function KsJTNet_Util() {
    }
    /*  원본 코드
        aryTemp.splice(0, aryTemp.length);
        await KsNode.DB_getDBD_byNid(aryTemp, tnm_userInfo, nid_requester);
        if(aryTemp.length > 0)
        {
            console.log("#---- FCM 전송 대상수 전체 : "+aryTemp.length);
            let fcm_dest = [];
            for(let i_ins = 0; i_ins < aryTemp.length; i_ins++)
            {
            //큐를 생성한 사람은 FCM을 받을 필요가 없다.
            if(aryTemp[i_ins].cbg != null && aryTemp[i_ins].cbg != undefined && aryTemp[i_ins].cbg.length > 0 && aryTemp[i_ins].cbg != userInfo_requester.cbg)
                fcm_dest.push(aryTemp[i_ins].cbg);
            }

            console.log("#---- FCM 전송 대상수 필터 : "+fcm_dest.length);
            
            const options = {
            uri:'https://kswpos-a-default-rtdb.asia-southeast1.firebasedatabase.app/fcm.json',
            method: 'POST',
            body: JSON.stringify({
                fcmType:"D",
                __uid:userInfo_master.uid,
                _uid:userInfo_requester.uid, //FCM 보내는 사람
                uid:"", //FCM 받는 사람 //받는 사람이 배열이니까 없어짐..
                nid:userInfo_master.nid,
                cbg:fcm_dest,
                type:userInfo_master.type,
                pnm:"to liquidator",
                prev:"by Node.js",
                rsm:aryResultPool[0].uid, //대상
                pack:"[{\"type\":\"qr\",\"uid\":\"mst-user-0;jtnet_jinsol;1645001218934\"}]",
                //des:userInfo_master.des
            }),
            }
            
            let request=require('request');
            request.post(options, function(err,httpResponse,body)
            {
            console.log("#----Result cbg : " + httpResponse.toString());
            //callback
            });
        }
    */
    KsJTNet_Util.prototype.FCM_broadcastToNidGroup = function (tnm_userInfo, userInfo_master, userInfo_requester, tradeItem) {
        return __awaiter(this, void 0, void 0, function () {
            var KsNode_Module, KsNode, aryTemp, fcm_dest, i_ins, options, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (tnm_userInfo == null || tnm_userInfo == undefined ||
                            userInfo_master == null || userInfo_master == undefined ||
                            userInfo_requester == null || userInfo_requester == undefined ||
                            tradeItem == null || tradeItem == undefined)
                            return [2 /*return*/, ""];
                        KsNode_Module = require(process.env.PATH_PROJET + '/kstools_js/src/tool/node/KsNode');
                        KsNode = new KsNode_Module.KsNode();
                        aryTemp = new Array();
                        aryTemp.splice(0, aryTemp.length);
                        return [4 /*yield*/, KsNode.DB_getDBD_byNid(aryTemp, tnm_userInfo, userInfo_requester.nid)];
                    case 1:
                        _a.sent();
                        if (aryTemp.length > 0) {
                            console.log("#---- FCM 전송 대상수 전체 : " + aryTemp.length);
                            fcm_dest = [];
                            for (i_ins = 0; i_ins < aryTemp.length; i_ins++) {
                                //큐를 생성한 사람은 FCM을 받을 필요가 없다.
                                if (aryTemp[i_ins].cbg != null && aryTemp[i_ins].cbg != undefined && aryTemp[i_ins].cbg.length > 0 && aryTemp[i_ins].cbg != userInfo_requester.cbg)
                                    fcm_dest.push(aryTemp[i_ins].cbg);
                            }
                            console.log("#---- FCM 전송 대상수 필터 : " + fcm_dest.length);
                            options = {
                                uri: 'https://kswpos-a-default-rtdb.asia-southeast1.firebasedatabase.app/fcm.json',
                                method: 'POST',
                                body: JSON.stringify({
                                    fcmType: "D",
                                    __uid: userInfo_master.uid,
                                    _uid: userInfo_requester.uid,
                                    uid: "",
                                    nid: userInfo_master.nid,
                                    cbg: fcm_dest,
                                    type: userInfo_master.type,
                                    pnm: "to liquidator",
                                    prev: "by Node.js",
                                    rsm: tradeItem.uid,
                                    pack: "[{\"type\":\"qr\",\"uid\":\"mst-user-0;jtnet_jinsol;1645001218934\"}]",
                                    //des:userInfo_master.des
                                }),
                            };
                            request = require('request');
                            request.post(options, function (err, httpResponse, body) {
                                console.log("#----Result cbg : " + httpResponse.toString());
                                //callback
                            });
                        }
                        return [2 /*return*/, ""];
                }
            });
        });
    };
    return KsJTNet_Util;
}());
exports.KsJTNet_Util = KsJTNet_Util;

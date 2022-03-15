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
exports.KsJTNet_APIManager = void 0;
var KsJTNet_APIManager = /** @class */ (function () {
    function KsJTNet_APIManager() {
    }
    KsJTNet_APIManager.prototype.getAgentInfo_fromOB = function (bno, tid) {
        return __awaiter(this, void 0, void 0, function () {
            var encKey, crypto, hash, KsConn_Http, response, result_str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (bno == null || bno == undefined || tid == null || tid == undefined)
                            return [2 /*return*/, ""];
                        encKey = "3O421T9V6hxb5dnGSuDVd27BFRsnQYYS";
                        crypto = require('crypto');
                        hash = crypto.createHash('SHA256').update("P" + bno + tid).digest('hex');
                        hash = crypto.createHash('SHA256').update("" + hash + encKey).digest('hex');
                        console.log("KEY : " + hash);
                        KsConn_Http = require('./../tool/conn/KsConn_Http');
                        return [4 /*yield*/, new KsConn_Http.KsConn_Http().m_POST('https://jms.jtnet.co.kr/jmsApi/payda/siteInfo', KsConn_Http.KsConn_Http.HEADER_json, {
                                servicetype: 'P',
                                // businessnumber:"1078155843",
                                // siteid:"1802100001",
                                // tokn:"085bdfe8fa05314f535976fd105346711c429babc2acbc6c2c2e69eaa71bfd34",
                                businessnumber: bno,
                                siteid: tid,
                                tokn: hash,
                            })];
                    case 1:
                        response = _a.sent();
                        result_str = JSON.stringify(response.data, function (key, value) { if (value !== null)
                            return value; }).trim();
                        return [2 /*return*/, result_str];
                }
            });
        });
    };
    KsJTNet_APIManager.prototype.queryTo_VANTest = function (connName, sendData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var net, pumpIP, pumpPort, client;
                        return __generator(this, function (_a) {
                            net = require('net');
                            pumpIP = '211.48.96.28';
                            pumpPort = 11722;
                            client = net.createConnection({ port: pumpPort, host: pumpIP }, function () {
                                console.log(connName + ' Connected: ');
                                console.log('   local = %s:%s', client.localAddress, client.localPort);
                                console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);
                                client.setTimeout(20000);
                                //this.setEncoding('EUC-KR');
                                try {
                                    client.write(sendData, function () {
                                    });
                                }
                                catch (e) { //nodejs socket.write does not throw exception
                                    resolve(new Buffer(0));
                                }
                                client.on('data', function (data) {
                                    var result = data;
                                    console.log(connName + " From Server: " + data.toString());
                                    resolve(result);
                                    client.end();
                                });
                                client.on('end', function () {
                                    console.log(connName + ' Client disconnected');
                                    resolve(new Buffer(0));
                                });
                                client.on('error', function (err) {
                                    console.log('Socket Error: ', JSON.stringify(err));
                                    resolve(new Buffer(0));
                                });
                                client.on('timeout', function () {
                                    console.log('Socket Timed Out');
                                    client.end();
                                    resolve(new Buffer(0));
                                });
                                client.on('close', function () {
                                    console.log('Socket Closed');
                                    resolve(new Buffer(0));
                                });
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    KsJTNet_APIManager.prototype.send = function (socket, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            try {
                                socket.write(data, function () {
                                    resolve(true); //data sent, resolve the promise
                                });
                            }
                            catch (e) { //nodejs socket.write does not throw exception
                                resolve(false);
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return KsJTNet_APIManager;
}());
exports.KsJTNet_APIManager = KsJTNet_APIManager;

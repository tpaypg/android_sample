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
exports.KsConn_Http = void 0;
var KsConn_Http = /** @class */ (function () {
    function KsConn_Http() {
    }
    KsConn_Http.prototype.m_GET = function (urlPath, header, data) {
        return __awaiter(this, void 0, void 0, function () {
            var axios, url, params, axios_ins, response, returns;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axios = require('axios');
                        url = require('url');
                        params = new url.URLSearchParams(data);
                        axios_ins = axios.create({ timeout: 1000 });
                        return [4 /*yield*/, axios_ins.get(urlPath + '?' + params)];
                    case 1:
                        response = _a.sent();
                        returns = {
                            "state": response.status,
                            "header": response.header,
                            "data": response.data,
                            //"data_cvt":decodeURI(response.data).trim(),
                        };
                        console.log("STATE CODE : " + response.status);
                        console.log("DATA     : " + returns.data);
                        //console.log("DATA CVT : " + returns.data_cvt);
                        return [2 /*return*/, returns];
                }
            });
        });
    };
    KsConn_Http.prototype.m_POST = function (urlPath, header, data) {
        return __awaiter(this, void 0, void 0, function () {
            var axios, axios_ins, response, returns;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        axios = require('axios');
                        axios_ins = axios.create({ timeout: 1000 });
                        return [4 /*yield*/, axios_ins.post(urlPath, data, {
                                headers: header
                            })];
                    case 1:
                        response = _a.sent();
                        returns = {
                            "state": response.status,
                            "header": response.header,
                            "data": response.data,
                            //"data_cvt":JSON.stringify(response.data, (key, value) => {if (value !== null) return value}).trim(),
                        };
                        console.log("STATE CODE : " + response.status);
                        console.log("DATA     : " + returns.data);
                        //console.log("DATA CVT : " + returns.data_cvt);
                        return [2 /*return*/, returns];
                }
            });
        });
    };
    KsConn_Http.HEADER_x_www_form_urlencoded = {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    KsConn_Http.HEADER_json = {
        'content-type': 'application/json;charset=UTF-8'
    };
    return KsConn_Http;
}());
exports.KsConn_Http = KsConn_Http;

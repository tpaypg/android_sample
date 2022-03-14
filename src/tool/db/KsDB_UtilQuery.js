"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KsDB_UtilQuery = void 0;
var KsStringBuilder_1 = require("./../util/KsStringBuilder");
var KsDB_UtilQuery = /** @class */ (function () {
    function KsDB_UtilQuery() {
    }
    KsDB_UtilQuery.prototype.m_StoreDB_selectColumn = function () {
        return "tdx, tkn, mil, uid, mid, nid, cid, did, pwd, scd, ono, cbs, cbf, cbg, ptx, pty, ptz, ptw, ptr, pta, lev, hit, lke, ebl, cat, type, pmis, pnm, prev, pack, des, log";
    };
    KsDB_UtilQuery.prototype.m_getQuery_insert = function (sb, tableNM, tkn, millis, getData) {
        if (sb == null || sb == undefined)
            sb = new KsStringBuilder_1.KsStringBuilder();
        if (getData == null)
            return sb;
        if (getData.mil == null)
            getData.mil = millis;
        sb.append("INSERT INTO " + tableNM + " (" + this.m_StoreDB_selectColumn() + ") values(");
        sb.append("NOW(),");
        sb.append("'").append(tkn).append("',");
        if (getData.mil == null)
            sb.append("").append("0").append(",");
        else
            sb.append("").append("" + getData.mil).append(",");
        if (getData.uid == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.uid).append("',");
        if (getData.mid == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.mid).append("',");
        if (getData.nid == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.nid).append("',");
        if (getData.cid == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.cid).append("',");
        if (getData.did == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.did).append("',");
        if (getData.pwd == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.pwd).append("',");
        if (getData.scd == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.scd).append("',");
        if (getData.ono == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.ono).append("',");
        if (getData.cbs == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.cbs).append("',");
        if (getData.cbf == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.cbf).append("',");
        if (getData.cbg == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.cbg).append("',");
        if (getData.ptx == null)
            sb.append("default,");
        else
            sb.append("" + getData.ptx).append(",");
        if (getData.pty == null)
            sb.append("default,");
        else
            sb.append("" + getData.pty).append(",");
        if (getData.ptz == null)
            sb.append("default,");
        else
            sb.append("" + getData.ptz).append(",");
        if (getData.ptw == null)
            sb.append("default,");
        else
            sb.append("" + getData.ptw).append(",");
        if (getData.ptr == null)
            sb.append("default,");
        else
            sb.append("" + getData.ptr).append(",");
        if (getData.pta == null)
            sb.append("default,");
        else
            sb.append("" + getData.pta).append(",");
        if (getData.lev == null)
            sb.append("default,");
        else
            sb.append("" + getData.lev).append(",");
        if (getData.hit == null)
            sb.append("default,");
        else
            sb.append("" + getData.hit).append(",");
        if (getData.lke == null)
            sb.append("default,");
        else
            sb.append("" + getData.lke).append(",");
        if (getData.ebl == null)
            sb.append("default,");
        else
            sb.append("" + getData.ebl).append(",");
        if (getData.cat == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.cat).append("',");
        if (getData.type == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.type).append("',");
        if (getData.pmis == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.pmis).append("',");
        if (getData.pnm == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.pnm).append("',");
        if (getData.prev == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.prev).append("',");
        if (getData.pack == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.pack).append("',");
        if (getData.des == null)
            sb.append("default,");
        else
            sb.append("'").append("" + getData.des).append("',");
        if (getData.log == null)
            sb.append("default)");
        else
            sb.append("'").append("" + getData.log).append("')");
        return sb;
    };
    return KsDB_UtilQuery;
}());
exports.KsDB_UtilQuery = KsDB_UtilQuery;

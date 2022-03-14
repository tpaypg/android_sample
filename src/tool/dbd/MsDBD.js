"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsDBD = void 0;
var MsDBD = /** @class */ (function () {
    function MsDBD() {
        //Json으로 바뀔 것이기 때문에 null 허용
        /*
        
        Type typeGson = new TypeToken<List<MsDBD>>(){}.getType();
        Gson gson = new GsonBuilder().setDateFormat("MMM dd, YYYY, hh:mm:ss a").create();
        이런식으로 날짜 형식을 맞춰 줘야 파싱이 된다.
         */
        this.tdx = null; //new DateTime.now(); //MsDBD_Define.D_Idx_tdx //MsDBD.g.dart 에 MsGsonUtil().m_toDateTime(v as String) 이렇게 바꿀것
        this.tkn = null; //11
        this.mil = null; //12
        this.uid = null; //20
        this.mid = null; //21
        this.nid = null; //21
        this.cid = null; //21
        this.did = null; //21
        this.pwd = null; //22
        this.scd = null; //23
        this.ono = null; //24
        this.cbs = null; //30
        this.cbf = null; //31
        this.cbg = null; //32
        this.ptx = null; //40
        this.pty = null; //41
        this.ptz = null; //42
        this.ptw = null; //43
        this.ptr = null; //radius or length      //44
        this.pta = null; //angle                 //45
        this.lev = null; //50
        this.hit = null; //50
        this.lke = null; //51
        this.ebl = null; //52
        this.cat = null; //카테고리               //60 MsDBD_Define.D_Idx_cat
        this.type = null;
        this.pmis = null;
        this.pnm = null; //61 MsDBD_Define.D_Idx_pnm
        this.prev = null; //62 MsDBD_Define.D_Idx_prev
        this.pack = null; //63 MsDBD_Define.D_Idx_pack
        this.des = null; //64 MsDBD_Define.D_Idx_dex
        this.log = null; //65
        this.req = null; //Request Message //요청코드
        this.rem = null; //Result Message //서버응답이나 RX응답 여기저기에서 사용할
        this.rec = null; //Result Code //서버응답이나 RX응답  여기저기에서 사용할
    }
    return MsDBD;
}());
exports.MsDBD = MsDBD;

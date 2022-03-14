class MsDBD {
    //Json으로 바뀔 것이기 때문에 null 허용
    /*
    
    Type typeGson = new TypeToken<List<MsDBD>>(){}.getType();
    Gson gson = new GsonBuilder().setDateFormat("MMM dd, YYYY, hh:mm:ss a").create();
    이런식으로 날짜 형식을 맞춰 줘야 파싱이 된다.
     */
    tdx:Date|null = null; //new DateTime.now(); //MsDBD_Define.D_Idx_tdx //MsDBD.g.dart 에 MsGsonUtil().m_toDateTime(v as String) 이렇게 바꿀것
    tkn:String|null = null;                         //11
    mil:Number|null = null;                         //12
    uid:String|null = null;                         //20
    mid:String|null = null;                         //21
    nid:String|null = null;                         //21
    cid:String|null = null;                         //21
    did:String|null = null;                         //21
    pwd:String|null = null;                         //22
    scd:String|null = null;                         //23
    ono:String|null = null;                         //24
    cbs:String|null = null;                         //30
    cbf:String|null = null;                         //31
    cbg:String|null = null;                         //32
    ptx:Number|null = null;                         //40
    pty:Number|null = null;                         //41
    ptz:Number|null = null;                         //42
    ptw:Number|null = null;                         //43
    ptr:Number|null = null; //radius or length      //44
    pta:Number|null = null; //angle                 //45
    lev:Number|null = null;                            //50
    hit:Number|null = null;                            //50
    lke:Number|null = null;                            //51
    ebl:Number|null = null;                            //52
    cat:String|null = null; //카테고리               //60 MsDBD_Define.D_Idx_cat
    type:String|null = null;
    pmis:String|null = null;
    pnm:String|null = null;                         //61 MsDBD_Define.D_Idx_pnm
    prev:String|null = null;                        //62 MsDBD_Define.D_Idx_prev
    pack:String|null = null;                        //63 MsDBD_Define.D_Idx_pack
    des:String|null = null;                         //64 MsDBD_Define.D_Idx_dex
    log:String|null = null;                         //65
    
    req:String|null = null; //Request Message //요청코드
    rem:String|null = null; //Result Message //서버응답이나 RX응답 여기저기에서 사용할
    rec:Number|null = null; //Result Code //서버응답이나 RX응답  여기저기에서 사용할
}    

export {MsDBD};
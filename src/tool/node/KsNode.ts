class KsNode {
    

    isRequestParam(returnsArray:any[], param:string, rem:string, rec:number ):boolean
    {
        let KST = require("./../base/KST");


        if(KST.KST.isEmpty(param))
        {
            if(rem == null || rem == undefined) rem = "필수파라미터 누락.";
            if(rec == null || rec == undefined) rec = 400;

            this.sys_returnsDBD(returnsArray, rem, rec);
            return false;
        }
        return true;
    }

    isHaveResult(destArray:any[], rem:string, rec:number ):boolean
    {
        if(destArray == null || destArray == undefined)
            return false;

        if(destArray.length == 0)
        {
            if(rem == null || rem == undefined) rem = "조회 결과 없음.";
            if(rec == null || rec == undefined) rec = 400;

            this.sys_returnsDBD(destArray, rem, rec);
            return false;
        }
        return true;
    }


    isEqual(returnsArray:any[], param0:string, param1:string, rem:string, rec:number ):boolean
    {
        let KST = require("./../base/KST");


        if(KST.KST.isEmpty(param0) || KST.KST.isEmpty(param1)|| !KST.KST.isEqual(param0, param1))
        {
            if(rem == null || rem == undefined) rem = "입력값이 부정확합니다.";
            if(rec == null || rec == undefined) rec = 400;

            this.sys_returnsDBD(returnsArray, rem, rec);
            return false;
        }
        return true;
    }












    sys_returnsDBD(returnArray:any[], rem:string, rec:number)
    {
        let MsDBD = require("./../dbd/MsDBD");
        let error = new MsDBD.MsDBD;
        error.rec = rec;
        error.rem = rem;
        returnArray.splice(0, returnArray.length);
        returnArray.push(error);
    }






    async DB_getDBD_byTkn(aryResultPool:any[], tnm:string, tkn:string):Promise<any[]>
    {
        let query = "SELECT * FROM "+tnm+" WHERE tkn = '"+tkn+"';";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }

    async DB_getDBD_byUid(aryResultPool:any[], tnm:string, uid:string):Promise<any[]>
    {
        let query = "SELECT * FROM "+tnm+" WHERE uid = '"+uid+"';";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }
    async DB_getDBD_byMid(aryResultPool:any[], tnm:string, mid:string):Promise<any[]>
    {
        let query = "SELECT * FROM "+tnm+" WHERE mid = '"+mid+"';";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }
    async DB_getDBD_byDid(aryResultPool:any[], tnm:string, did:string)
    {
        let query = "SELECT * FROM "+tnm+" WHERE did = '"+did+"';";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }

    async DB_getDBD_byLke(aryResultPool:any[], tnm:string, lke:string):Promise<any[]>
    {
        let query = "SELECT * FROM "+tnm+" WHERE lke = "+lke+";";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }
    
    async DB_getDBD_byNid_levOver(aryResultPool:any[], tnm:string, nid:string, lev:number):Promise<any[]>
    {
        let query = "SELECT * FROM "+tnm+" WHERE nid = '"+nid+"' AND lev >= "+lev+";";
        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }

    async DB_getDBD_byNid(aryResultPool:any[], tnm:string, nid:string, idx:number, max:number):Promise<any[]>
    {
        if(idx == undefined || idx == null) idx = 0;
        if(max == undefined || max == null) max = 20;

        let query = "SELECT * FROM "+tnm+" WHERE nid = '"+nid+"' order by mil desc Limit " + idx +", "+max;


        await this.DB_query(aryResultPool, query);
        return aryResultPool;
    }


    async DB_query(aryResultPool:any[], query:string):Promise<void>
    {
        console.log("## m_toDB() - Query : " + query);
        //디비에 들리는 곳
        {
            let KsDBD_Manager = require('./../db/KsDB_Manager');
            let ksDbdManager = new KsDBD_Manager.KsDB_Manager();
            await ksDbdManager.m_toDB_getAryDBD(aryResultPool, query)
        }

        for(let i_ins = 0; i_ins < aryResultPool.length; i_ins++)
        {
            let oneDBD = aryResultPool[i_ins];

            console.log("## RESULT UID : " + oneDBD.uid);
            console.log("## RESULT MID : " + oneDBD.mid);
            console.log("## RESULT PWD : " + oneDBD.pwd);
        }
    }


}    

export {KsNode};
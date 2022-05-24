

class KsJTNet_Util {

    async m_findKindOfQR(tid:string, qrCode:string):Promise<string>
    {
        if(qrCode.length > 64)
            return "UNIONQR";

        const KsJTNet_APIManager = require(process.env.PATH_PROJET+'/kstools_js/src/tool_jtnet/KsJTNet_APIManager');
        let ksJTNet_APIManager = new KsJTNet_APIManager.KsJTNet_APIManager();

        const KsJTNet_UtilDocu = require(process.env.PATH_PROJET+'/kstools_js/src/tool_jtnet/KsJTNet_UtilDocu');
        let ksJTNet_utilDocu = new KsJTNet_UtilDocu.KsJTNet_UtilDocu();

        let kindOfAppCard = "APP";
        let docu_kindOfAppCard = ksJTNet_utilDocu.m_getDocu_findAppCardID(tid, qrCode);
        let result_kindOfAppCard = await ksJTNet_APIManager.queryTo_VANTest("dd", docu_kindOfAppCard );
        result_kindOfAppCard = result_kindOfAppCard.toString();

        if(result_kindOfAppCard.length > 116)
        {
            let resCode = result_kindOfAppCard.substring(116, 116+4);
            kindOfAppCard = result_kindOfAppCard.substring(116+40, 116+40+3);

            console.log(" resCode: " + resCode);
            console.log(" resAppID: " + kindOfAppCard);
        }
        return kindOfAppCard;
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
    async FCM_broadcastToNidGroup(tnm_userInfo:string, userInfo_master:any, userInfo_requester:any, tradeItem:any):Promise<string>
    {
        if(
            tnm_userInfo == null || tnm_userInfo == undefined || 
            userInfo_master == null || userInfo_master == undefined || 
            userInfo_requester == null || userInfo_requester == undefined || 
            tradeItem == null || tradeItem == undefined ) return "";



        const KsNode_Module = require(process.env.PATH_PROJET+'/kstools_js/src/tool/node/KsNode');
        const KsNode = new KsNode_Module.KsNode();

        let aryTemp = new Array();
        aryTemp.splice(0, aryTemp.length);
        await KsNode.DB_getDBD_byNid(aryTemp, tnm_userInfo, userInfo_requester.nid);
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
                rsm:tradeItem.uid, //대상
                pack:"[{\"type\":\"qr\",\"uid\":\"mst-user-0;jtnet_jinsol;1645001218934\"}]",
                //des:userInfo_master.des
            }),
            }
            
            let request=require('request');
            request.post(options, function(err:any, httpResponse:any, body:any)
            { 
            console.log("#----Result cbg : " + httpResponse.toString());
            //callback
            });
        }


        return "";
    }



}    

export {KsJTNet_Util};








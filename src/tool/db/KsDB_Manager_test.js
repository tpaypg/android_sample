
//import {MsDBD} from './MsTools_Script/tool/base/MsDBD.js';




async function m_main()
{
    let MsDBD = require('./../dbd/MsDBD');
    
    
    
    let KsDBD_Manager = require('./KsDB_Manager');
    let ksDbdManager = new KsDBD_Manager.KsDB_Manager();

    let result = await ksDbdManager.m_getDBD_byTkn();


    console.log("efefe " + result);
}


m_main();
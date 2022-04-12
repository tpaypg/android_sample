
class KsDB_Manager {

    
    async m_toDB_getAryDBD(aryResultPool:any, query:string):Promise<any>
    {
        console.log("## m_toDB_getAryDBD()");
        const KsDbConnecter = require('./connecter/KsDB_Connecter');
        let mariaDB;

        try {
            mariaDB = await KsDbConnecter.getConnection();
            // let KsDBD_Manager = require('./KsDB_Manager');
            // let ksDbdManager = new KsDBD_Manager.KsDB_Manager();

            let resultAry = await this.m_query_getAryDBD(mariaDB, query, true);
            
            console.log("## Result : " + resultAry.length);
            for(let i_ins = 0; i_ins < resultAry.length; i_ins++)
            {
                aryResultPool.push(resultAry[i_ins]);
            }

        } catch (error) {
            console.log(error);
            await mariaDB.rollback();

            let resultObject:any = new Object();
            console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
            resultObject.rec = 400;
            resultObject.rem = "FATAL ERROR";

            aryResultPool.splice(0, aryResultPool.length);
            aryResultPool.push(resultObject);
        } finally
        {
            try {
                mariaDB.release();
                mariaDB.destroy();
            } catch (error) {
                console.log("!! ################## FATAL ERROR"+error);
                let resultObject:any = new Object();

                console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
                resultObject.rec = 400;
                resultObject.rem = "FATAL ERROR";

                aryResultPool.splice(0, aryResultPool.length);
                aryResultPool.push(resultObject);
                return aryResultPool;
            }
        }

        return aryResultPool;
    }

















    
    async m_query_getAryDBD(mariaDBConnection:any, query:string, noMatter:boolean):Promise<any>
    {
        console.log("## m_query_getAryDBD()");
        let result:any = await this.m_query(mariaDBConnection, query);
        let resultAryDBD:any;
        if(result == null) return [];
        resultAryDBD = result[0];
        this.m_sys_setResult200OK_forAryDBD(mariaDBConnection, resultAryDBD);
        return resultAryDBD;
        
    }


    async m_query_getOneDBD(mariaDBConnection:any, query:string, isErrorIfNotOneResult:boolean):Promise<any>
    {
        console.log("## m_query_getOneDBD()");
        let result:any = await this.m_query(mariaDBConnection, query);
        let resultDBD:any;
        if(result == null) return resultDBD;
        try {
            if(result[0].length == 1)
            {
                resultDBD = result[0][0];

                resultDBD.rec = 200;
                resultDBD.rem = "OK";
            }
            else if(result[0].length == 0)
            {
                resultDBD = new Object();
                //resultObject.uid = uid;
                
                console.log("#### NORMAL ERROR ####");
                resultDBD.rec = 201;
                resultDBD.rem = "NOT CURRENT";
            }
            else if(result[0].length > 1 && !isErrorIfNotOneResult)
            {
                resultDBD = result[0][0];

                resultDBD.rec = 200;
                resultDBD.rem = "OK";
            }
            else {
                resultDBD = new Object();
                //resultObject.uid = uid;
                
                console.log("#### FATAL ERROR ####          !!!!!! - DUPLICATE USER");
                resultDBD.rec = 410;
                resultDBD.rem = "FATAL ERROR - DUPLICATE USER";
            }

        } catch (error) {
            console.log(error);
            await mariaDBConnection.rollback();
      
            resultDBD = new Object();
            console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
            resultDBD.rec = 400;
            resultDBD.rem = "FATAL ERROR";
        } finally {

        }

        return resultDBD;
        
    }

    async m_query(mariaDBConnection:any, query:string):Promise<any>
    {
        console.log("## m_query()");
        let result:any;

        try {
            await mariaDBConnection.beginTransaction(); 
            result = await mariaDBConnection.execute(query);
            await mariaDBConnection.commit();
            console.log("## m_query() - RESULT InsertId : " + result.insertId);
            console.log("## m_query() - RESULT COUNT : " + result[0].length);
        } catch (error) {
            console.log(error);
            await mariaDBConnection.rollback();
            console.log("## m_query() - #### FATAL ERROR ####          !!!!!! - DB CRUSH");
            result = null;
        } finally {
            mariaDBConnection.release();
            mariaDBConnection.destroy();
        }
        return result;
    }






    async m_sys_setResult200OK_forAryDBD(mariaDBConnection:any, resultAryDBD:any)
    {
        console.log("## m_sys_setResult200OK_forAryDBD()");

        try {
            for(let i_ins:number = 0; i_ins < resultAryDBD.length; i_ins++)
            {
                let oneDBD:any = resultAryDBD[i_ins];
                oneDBD.rec = 200;
                oneDBD.rem = "OK";
            }

        } catch (error) {
            console.log(error);
            await mariaDBConnection.rollback();

            const MsStore_DBD = require('./../../MsTools_Script/tool/base/MsStore_DBD');
            let oneDBD = new MsStore_DBD.MsStore_DBD();
      
            console.log("#### FATAL ERROR ####          !!!!!! - DB CRUSH");
            oneDBD.rec = 400;
            oneDBD.rem = "FATAL ERROR";
            resultAryDBD = [oneDBD];
        } finally {
            mariaDBConnection.release();
            mariaDBConnection.destroy();
        }
    }
}    



export {KsDB_Manager};








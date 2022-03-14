

class KsJTNet_APIManager {

    async getAgentInfo_fromOB(bno:string, tid:string):Promise<String>
    {
        if(bno == null || bno == undefined || tid == null || tid == undefined) return "";
        let encKey:string = "3O421T9V6hxb5dnGSuDVd27BFRsnQYYS";

        const crypto = require('crypto');
        let hash = crypto.createHash('SHA256').update("P" + bno + tid).digest('hex');
        hash = crypto.createHash('SHA256').update("" + hash + encKey).digest('hex');

        console.log("KEY : " + hash);

        const KsConn_Http = require('./../ksnode/conn/KsConn_Http');
        let response = await new KsConn_Http.KsConn_Http().m_POST('https://jms.jtnet.co.kr/jmsApi/payda/siteInfo', 
            KsConn_Http.KsConn_Http.HEADER_json,{
            servicetype:'P',
            // businessnumber:"1078155843",
            // siteid:"1802100001",
            // tokn:"085bdfe8fa05314f535976fd105346711c429babc2acbc6c2c2e69eaa71bfd34",
            businessnumber:bno,
            siteid:tid,
            tokn:hash,
            }
        );

        let result_str:string = JSON.stringify(response.data , (key, value) => {if (value !== null) return value}).trim()

        return result_str;
    }

    async queryTo_VANTest(connName:string, sendData:any):Promise<Buffer>{

        
        return new Promise<Buffer>(async (resolve) => {
            const net = require('net');
            const pumpIP = '211.48.96.28';
            const pumpPort = 11722;

            let client = net.createConnection({port:pumpPort, host:pumpIP}, function() {
            console.log(connName + ' Connected: ');
            console.log('   local = %s:%s', client.localAddress, client.localPort);
            console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);
            client.setTimeout(20000);
            //this.setEncoding('EUC-KR');

            try{
                client.write(sendData,() => {
                    });
                }
                catch(e){ //nodejs socket.write does not throw exception
                    resolve(new Buffer(0));
                }


            client.on('data', function(data:any) {
                let result = data;
                console.log(connName + " From Server: " + data.toString());
                resolve(result);
                client.end();
            });
            client.on('end', function() {
                console.log(connName + ' Client disconnected');
                resolve(new Buffer(0));
            });
            client.on('error', function(err:any) {
                console.log('Socket Error: ', JSON.stringify(err));
                resolve(new Buffer(0));
            });
            client.on('timeout', function() {
                console.log('Socket Timed Out');
                client.end();
                resolve(new Buffer(0));
            });
            client.on('close', function() {
                console.log('Socket Closed');
                resolve(new Buffer(0));
            });
            });
        });
        
    }



    async send(socket:any, data:any):Promise<any> {
        return new Promise<boolean>(async (resolve) => {
            try{
                socket.write(data,() => {
                    resolve(true); //data sent, resolve the promise
                });
            }
            catch(e){ //nodejs socket.write does not throw exception
                resolve(false);
            }
        })
    }

}    

export {KsJTNet_APIManager};








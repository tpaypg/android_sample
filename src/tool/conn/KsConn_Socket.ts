
class KsConn_Socket {

    async m_send_onIpPort(ip:string, port:number, sendData:any):Promise<Buffer>{
        
        return new Promise<Buffer>(async (resolve) => {
            const net = require('net');

            let client = net.createConnection( {port:port, host:ip}, 
                function() 
                {
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
                        console.log("## From Server: " + data.toString());
                        resolve(result);
                        client.end();
                    });
                    client.on('end', function() {
                        console.log('## Client disconnected');
                        resolve(new Buffer(0));
                    });
                    client.on('error', function(err:any) {
                        console.log('## Socket Error: ', JSON.stringify(err));
                        resolve(new Buffer(0));
                    });
                    client.on('timeout', function() {
                        console.log('## Socket Timed Out');
                        client.end();
                        resolve(new Buffer(0));
                    });
                    client.on('close', function() {
                        console.log('## Socket Closed');
                        resolve(new Buffer(0));
                    });
                }
            );
        });
        
    }



    async m_send_onSocket(client:any, sendData:any):Promise<Buffer> {
        return new Promise<Buffer>(async (resolve) => {
            
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
                console.log("## From Server: " + data.toString());
                resolve(result);
                client.end();
            });
            client.on('end', function() {
                console.log('## Client disconnected');
                resolve(new Buffer(0));
            });
            client.on('error', function(err:any) {
                console.log('## Socket Error: ', JSON.stringify(err));
                resolve(new Buffer(0));
            });
            client.on('timeout', function() {
                console.log('## Socket Timed Out');
                client.end();
                resolve(new Buffer(0));
            });
            client.on('close', function() {
                console.log('## Socket Closed');
                resolve(new Buffer(0));
            });
        });
        
    }

}    

export {KsConn_Socket};








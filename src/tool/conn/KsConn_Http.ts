
class KsConn_Http {

    async m_GET(urlPath:string, header:{}, data:{}):Promise<{}>
    {
        
        const axios = require('axios');
        const url = require('url'); 

        const params = new url.URLSearchParams(data);

        const axios_ins = axios.create({timeout:1000});
        

        const response = await axios_ins.get(urlPath+'?'+params);
        
        let returns = {
            "state":response.status as number,
            "header":response.header,
            "data":response.data,
            //"data_cvt":decodeURI(response.data).trim(),
        }

        
        console.log("STATE CODE : " + response.status);
        console.log("DATA     : " + returns.data);
        //console.log("DATA CVT : " + returns.data_cvt);
    
        return returns;
    }

    async m_POST(urlPath:string, header:{}, data:{}):Promise<object>
    {
        const axios = require('axios');


        const axios_ins = axios.create({timeout:1000});

        const response = await axios_ins.post(urlPath, data, {
            headers:header
        })

        let returns = {
            "state":response.status as number,
            "header":response.header,
            "data":response.data,
            //"data_cvt":JSON.stringify(response.data, (key, value) => {if (value !== null) return value}).trim(),
        }

        console.log("STATE CODE : " + response.status);
        console.log("DATA     : " + returns.data);
        //console.log("DATA CVT : " + returns.data_cvt);
    
        return returns;
    }

    static HEADER_x_www_form_urlencoded = {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    static HEADER_json = {
        'content-type': 'application/json;charset=UTF-8'
    };

}    

export {KsConn_Http};








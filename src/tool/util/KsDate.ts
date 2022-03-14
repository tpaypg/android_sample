class KsDate {


    m_getYYMMDD(date:Date):string
    {
        if(date == null || date == undefined)
            date = new Date();
        
        let YY = date.getFullYear().toString().slice(-2);
        let MM = ("0" + (1 + date.getMonth())).slice(-2);
        let DD = ("0" + date.getDate()).slice(-2);

        return YY+MM+DD;
    }

    m_getYYMMDDhhmmss(date:Date):string
    {
        if(date == null || date == undefined)
            date = new Date();
        
        let YY = date.getFullYear().toString().slice(-2);
        let MM = ("0" + (1 + date.getMonth())).slice(-2);
        let DD = ("0" + date.getDate()).slice(-2);

        let hh = ("0" + date.getHours()).slice(-2);
        let mm = ("0" + date.getMinutes()).slice(-2);
        let ss = ("0" + date.getSeconds()).slice(-2);

        return YY+MM+DD+hh+mm+ss;
    }
}    

export {KsDate};
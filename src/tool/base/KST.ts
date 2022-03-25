class KST {


    static isEmpty(src:string):boolean
    {
        if(src == null || src == undefined || src.length == 0)
            return true;
        return false;
    }

    static isEqual(src0:any, str1:any):boolean
    {
        if(src0 == str1)
            return true;
        return false;
    }

}    

export {KST};
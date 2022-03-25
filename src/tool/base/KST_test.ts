class KST_test {


    m_doTest():void
    {
        console.log("-- Do KST_test --");
        const KST = require('./KST');

        let re = KST.KST.isEmpty("Ke");
        console.log("-- Do KST_test -- " + re);

    }

    
}    

export {KST_test};
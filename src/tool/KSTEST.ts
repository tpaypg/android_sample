class KSTEST {


    m_doTest():void
    {
        console.log("-- Do Test --");
        this.test_KST();

        
    }

    test_KST():void
    {
        const KST_test = require("./base/KST_test");
        const test = new KST_test.KST_test();
        test.m_doTest();
    }

    
}    

export {KSTEST};
class KsAxis {

    m_getPoint_XtoL(orgX:number, orgY:number, moveLenth:number, moveAngle:number):number[]
    {
    
        let returns = [
            (moveLenth * Math.cos(moveAngle * Math.PI/180)) + orgX, 
            (moveLenth * Math.sin(-moveAngle * Math.PI/180)) + orgY
        ];
        return returns;
    }

    m_getPoint_YtoR(orgX:number, orgY:number, moveLenth:number, moveAngle:number):number[]
    {
        moveAngle -= 90;
        moveAngle = this.m_getAngleAbs(moveAngle);
        let returns = [
            (moveLenth * Math.cos(moveAngle * Math.PI/180)) + orgX, 
            (moveLenth * Math.sin(moveAngle * Math.PI/180)) + orgY
        ];
        return returns;
    }

    m_getAngleAbs(angle0:number):number
    {
        if(angle0 < 0)
            angle0+=360;
        angle0%=360;
        return angle0;
    }
}    

export {KsAxis};
'use strict';


let MsAxis = this;

MsAxis.m_isAble = function()
{
  return true;
}



MsAxis.m_getPoint_XtoL = function(orgX, orgY, moveLenth, moveAngle)
{
  
  let returns = [
    (moveLenth * Math.cos(moveAngle * Math.PI/180)) + orgX, 
    (moveLenth * Math.sin(-moveAngle * Math.PI/180)) + orgY
  ];
  return returns;
}

MsAxis.m_getPoint_YtoR = function(orgX, orgY, moveLenth, moveAngle)
{
  moveAngle -= 90;
  moveAngle = MsAxis.m_getAngleAbs(moveAngle);
  let returns = [
      (moveLenth * Math.cos(moveAngle * Math.PI/180)) + orgX, 
      (moveLenth * Math.sin(moveAngle * Math.PI/180)) + orgY
  ];
  return returns;
}

MsAxis.m_getAngleAbs = function(angle0)
{
  if(angle0 < 0)
    angle0+=360;
  angle0%=360;
  return angle0;
}
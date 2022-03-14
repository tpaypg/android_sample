'use strict';


let MsEnginePhysical = new Object();

MsEnginePhysical.m_isAble = function()
{
  return true;
}

MsEnginePhysical.D_Option_Gravity = 3;


MsEnginePhysical.m_calc = function
(dest_MsEnginePhysical_Object, leftSide, topSide, rightSide, groundSide)
{
  dest_MsEnginePhysical_Object.m_inputAccY(MsEnginePhysical.D_Option_Gravity);
  dest_MsEnginePhysical_Object.m_calc();
  if(dest_MsEnginePhysical_Object.pty > groundSide)
  {
    dest_MsEnginePhysical_Object.pty = groundSide;
    dest_MsEnginePhysical_Object.m_inputHitGround();
  }
  if(dest_MsEnginePhysical_Object.ptx < leftSide)
  {
    dest_MsEnginePhysical_Object.ptx = leftSide;
    dest_MsEnginePhysical_Object.m_inputReversX();
  }
  if(dest_MsEnginePhysical_Object.ptx > rightSide)
  {
    dest_MsEnginePhysical_Object.ptx = rightSide;
    dest_MsEnginePhysical_Object.m_inputReversX();
  }  
}

MsEnginePhysical.m_getInt_range = function
(range)
{
  return Math.floor(Math.random() * (range));
}

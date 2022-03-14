'use strict';


let MsRandom = new Object();

MsRandom.m_isAble = function()
{
  return true;
}



MsRandom.m_getInt_minToMax = function
(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

MsRandom.m_getInt_range = function
(range)
{
  return Math.floor(Math.random() * (range));
}

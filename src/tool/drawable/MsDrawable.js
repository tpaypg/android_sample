'use strict';


let MsDrawable = new Object();

MsDrawable.m_isAble = function()
{
  return true;
}



MsDrawable.m_drawArrowAngle = function
(canvas, AxisX, AxisY, radius, Angle)
{
  let axis = MsAxis.m_getPoint_YtoR(AxisX, AxisY, radius, Angle);

  canvas.beginPath();
  canvas.strokeStyle = "#DDDD00"; 
  canvas.moveTo(AxisX, AxisY);
  canvas.lineTo(axis[0], axis[1]);
  canvas.lineJoin = "round";
  canvas.lineCap = "round";
  canvas.stroke();
  canvas.closePath();
}

MsDrawable.m_drawRectFill_ltrb = function
(canvas, left, top, right, bottom, color)
{
  if(color == null) color ="red";

  canvas.beginPath();
  canvas.rect(left, top, right-left, bottom-top);
  canvas.fillStyle="white";
  canvas.fill();
  canvas.closePath();
}

MsDrawable.m_drawRectFill_cxcywh = function
(canvas, centerX, centerY, width, height, color)
{
  if(color == null) color ="red";

  let halfW = width/2;
  let halfH = height/2;

  canvas.beginPath();
  canvas.rect(centerX-halfW, centerY-halfH, width, height);
  canvas.fillStyle=color;
  canvas.fill();
  canvas.closePath();
}


MsDrawable.m_drawCircleFill_cxcyr = function
(canvas, centerX, centerY, radius, color)
{
  if(color == null) color ="red";

  canvas.beginPath();
  canvas.arc(centerX, centerY, radius, 0, Math.PI*2);  
  canvas.fillStyle=color;
  canvas.fill();
  canvas.closePath();
}
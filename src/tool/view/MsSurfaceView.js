'use strict';


let MsSurfaceView = new Object();
MsSurfaceView.m_threadID = -1;

MsSurfaceView.m_isAble = function()
{
  return true;
}



MsSurfaceView.m_override_onClickListener = function(event, axisX, axisY)
{
  console.log("## MsSurfaceView onClickListener " + axisX + " " + axisY);
}
MsSurfaceView.sys_onClickListener = function(event)
{
  MsSurfaceView.m_override_onClickListener(event, event.clientX, event.clientY);
}





MsSurfaceView.m_init = function(_canvas, _delay)
{
  console.log("## MsSurfaceView.m_init()");
  MsSurfaceView.canvas = _canvas;
  MsSurfaceView.canvas.onclick = MsSurfaceView.sys_onClickListener;
  MsSurfaceView.context2d = _canvas.getContext("2d");
  MsSurfaceView.delay = _delay;

  MsSurfaceView.m_tick = 0;
}

MsSurfaceView.m_start = function()
{
  if(MsSurfaceView.m_threadID != -1)
    clearInterval(MsSurfaceView.m_threadID);
  MsSurfaceView.m_threadID = setInterval(MsSurfaceView.m_run, MsSurfaceView.delay);
}

MsSurfaceView.m_run = function()
{
  MsSurfaceView.context2d.clearRect(0,0,MsSurfaceView.canvas.width, MsSurfaceView.canvas.height);
  MsSurfaceView.m_draw(MsSurfaceView.context2d); 
  MsSurfaceView.m_tick++;
}

MsSurfaceView.m_draw = function(context2d)
{
  console.log("## m_draw("+MsSurfaceView.m_tick+")");

  MsDrawable.m_drawArrowAngle(context2d, 30,30,30,MsSurfaceView.m_tick%360);
}


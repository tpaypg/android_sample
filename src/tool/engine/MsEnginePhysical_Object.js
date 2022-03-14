'use strict';




class MsEnginePhysical_Object{
  constructor(){
    this.lastRecMax = 5; //이전 내역 저장할 갯수
    this.lastPtx = []; //last
    this.lastPty = []; //last
    this.ptx = 0;
    this.pty = 0;
    this.accx = 0;
    this.accy = 0;
    this.vlox = 0;
    this.vloy = 0;
    this.mass = 1;

    this.D_veloX_min = 0.05;
    this.D_veloY_min = 0.05;
    this.D_elasticity = 0.5; //탄성계수
    this.D_dccAir = 0.8;
    this.D_dccGround = 0.6;
  }

  m_inputStopY(){
    this.accy = 0;
    this.vloy = 0;
  }
  m_inputAccX(inputAcc){
    this.accx+=inputAcc/this.mass;
  }
  m_inputAccY(inputAcc){
    this.accy+=inputAcc/this.mass;
  }
  m_inputReversY()
  {
    this.vloy = 0;
    this.accy = -this.accy*this.D_elasticity;
  }
  m_inputReversX()
  {
    this.vlox = 0;
    this.accx = -this.accx*this.D_elasticity;
  }
  m_inputHitGround()
  {
    this.m_inputReversY();
    this.accx = this.accx*this.D_dccGround;
  }
  m_calc()
  {
    this.vlox += this.accx;
    this.vloy += this.accy;

    if(Math.abs(this.vlox) < this.D_veloX_min)this.vlox = 0;
    if(Math.abs(this.vloy) < this.D_veloY_min)this.vloy = 0;

    this.lastPtx.unshift(this.ptx);
    this.lastPty.unshift(this.pty);

    if(this.lastPtx.length > this.lastRecMax)
      this.lastPtx.pop();

    if(this.lastPty.length > this.lastRecMax)
      this.lastPty.pop();

    this.vlox *= this.D_dccAir;
    this.vloy *= this.D_dccAir;

    this.ptx += this.vlox;
    this.pty += this.vloy;
  }
  m_isStilMoveY()
  {
    for(let i_ins = 0; i_ins < this.lastPty.length; i_ins++ )
    {
      if(this.pty != this.lastPty[i_ins])
        return true;
    }
    for(let i_ins = 0; i_ins < this.lastPtx.length; i_ins++ )
    {
      if(this.ptx != this.lastPtx[i_ins])
        return true;
    }
    return false;
  }
}
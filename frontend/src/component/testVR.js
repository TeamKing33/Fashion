import React, { useState, useEffect, startTransition } from 'react';
import 'aframe';
import mp from './image/2.mp4';
import img1 from './image/20.jpg';
import img2 from './image/19.png';
import Left from "./testVR/left"
import Right from "./testVR/right"
function TestVR() {
 
  return (
    <div className='AlltestVR'>
     <div className="left">
     <Right/>


</div>


      <div className="right">
     <Left/>
      </div>
    </div>
  );
}

export default TestVR;

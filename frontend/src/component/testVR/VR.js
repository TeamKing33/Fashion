import React, { useState, useEffect, startTransition } from 'react';
import 'aframe';

import mp from './image/9.webm';
import mp2 from './image/10.webm';
import icon from './image/4.mp4';

import img8 from './image/8.jpg';
import img9 from './image/9.jpg';
import img10 from './image/10.jpg';

import webm from './image/5.webm';
import { NavLink } from 'react-router-dom';
function TestVR() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleVideoDisplay = () => {
      setTimeout(() => {
        startTransition(() => {
          setShowVideo(true);
        });
      }, 3000);
    };

    const handleDeviceOrientation = event => {
      const scene = document.querySelector('a-scene');
      const camera = scene.querySelector('[camera]');
      const { alpha, beta, gamma } = event;
      camera.setAttribute('rotation', {
        x: beta,
        y: alpha,
        z: gamma
      });
    };

    window.addEventListener('deviceorientation', handleDeviceOrientation);

    handleVideoDisplay();

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <>
    <a-scene>
      <a-entity camera></a-entity>
      <a-assets>
        <img id="myPhoto" src="" ></img>
      </a-assets>
      
      <a-entity
        id="house"
        gltf-model=""
        position="0 0 -5"
      ></a-entity>
      
      
  <a-box position="0 1.6 -7" width="10" height="3.2" depth="0.1"  src={img9}></a-box>
  <a-box position="0 1.6 3" width="10" height="3.2" depth="0.1" src={img9}></a-box>
  <a-box position="-5 1.6 -2" width="0.5" height="3.2" depth="10" src={img9}></a-box>
  <a-box position="5 1.6 -2" width="0.1" height="3.2" depth="10" src={img9}></a-box>

      {/* Floor */}
      <a-plane position="0 0 -2" rotation="-90 0 0" width="10" height="10" src={img10}></a-plane>
     
      <a-plane position="0 3.2 -2" rotation="90 0" width="10" height="10" src={img8 }></a-plane>
     
      {/* VR Sky */}
      <a-sky color="#ECECEC"></a-sky>
      {/* VR Light */}
      <a-light type="ambient" color="#FFFFFF" intensity="1"></a-light>
      <a-plane
         id="tv-screen"
         position="0 1.5 -4.9"
         rotation="0 0 0"
         width="2.4"
         height="1.8"
         material="shader: flat; transparent: true; opacity: 0;"
         onMouseEnter={() => startTransition(() => setShowVideo(true))}
        onMouseLeave={() => startTransition(() => setShowVideo(false))}
      >
        {showVideo && (
          <a-video
            src={mp}
            width="2.3"
            height="1.4"
            position="0 0.1 3"
            autoplay 
          ></a-video>
        )}
      </a-plane>
      <a-plane
  id="photo-frame"
  position="-4.5 1.5 -3.5"
  rotation="0 90 0"
  width="1.6"
  height="1.2"
  material="shader: flat; transparent: true; opacity: 0;"
>
  <a-image
    src={mp2}
    width="1.5"
    height="1.1"
    position="-3 0 2"
    visible="true"
  ></a-image>
</a-plane>



      <a-plane
        id="photo-frame"
        position="4.5 1.5 -3.5" 
        rotation="0 -90 0" 
        width="1.6"
        height="1.2"
        material="shader: flat; transparent: true; opacity: 0;"

      >
        <a-image
          src={webm}
          width="1.5"
          height="1.1"
          position="3 0 2"
        ></a-image>
        {/* <a-image
          src={webm}
          width="1.5"
          height="1.1"
          position="2 0 2"
        ></a-image> */}
      </a-plane>
     
    </a-scene>
    <div className="iconVR" >
        <NavLink to="/VR" >
      <video className="" style={{width:"80px", height:"80px",position:"fixed", display:"flex",marginRight:"20px", borderRadius:"30px"}} autoPlay muted loop>
        <source src={icon} type="video/mp4"  />
      </video>
      </NavLink>
      </div>
    </>
  );
}

export default TestVR;
import React, { useState, useEffect, startTransition } from 'react';
import 'aframe';
import mp from './image/2.mp4';
import img1 from './image/20.jpg';
import img2 from './image/19.png';

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
    <a-scene embedded> 
  <a-entity camera></a-entity>
  <a-assets>
    <img id="myPhoto" src=""></img>
  </a-assets>

  <a-entity id="house" gltf-model="" position="0 0 -5"></a-entity>

  <a-box position="0 1.6 -5" width="10" height="3.2" depth="0.1" color="#ffff"></a-box>
      <a-box position="0 1.6 3" width="10" height="3.2" depth="0.1" color="#ffff"></a-box>
      <a-box position="-5 1.6 -2" width="0.1" height="3.2" depth="8" color="#ffff"></a-box>
      <a-box position="5 1.6 -2" width="0.1" height="3.2" depth="8" color="#ffff"></a-box>
      {/* Floor */}
      <a-plane position="0 0 -2" rotation="-90 0 0" width="10" height="10" color="#777"></a-plane>
      {/* VR Sky */}
      <a-sky color="#ECECEC"></a-sky>
      {/* VR Light */}
      <a-light type="ambient" color="#FFFFFF" intensity="1"></a-light>
      {/* TV Screen */}
      <a-plane
        id="tv-screen"
        position="0 1.5 -3.9"
        rotation="0 0 0"
        width="2.4"
        height="1.8"
        color="#000"
        onMouseEnter={() => startTransition(() => setShowVideo(true))}
        onMouseLeave={() => startTransition(() => setShowVideo(false))}
      >
        {showVideo && (
          <a-video
            src={mp}
            width="2.3"
            height="1.4"
            position="0 0.1 1.6"
            autoplay 
          ></a-video>
        )}
      </a-plane>
      {/* Image Frame */}
      <a-plane
        id="photo-frame"
        position="-4.5 1.5 -3.5"
        rotation="0 90 0"
        width="1.6"
        height="1.2"
        color="#ffff"
      >
        <a-image
          src={img1}
          width="1.5"
          height="1.1"
          position="-3 0 0.01"
        ></a-image>
      </a-plane>
      <a-plane
        id="photo-frame"
        position="4.5 1.5 -3.5" 
        rotation="0 -90 0" 
        width="1.6"
        height="1.2"
        color="#ffff"
      >
        <a-image
          src={img2}
          width="1.5"
          height="1.1"
          position="3 0 0.01"
        ></a-image>
      </a-plane>
</a-scene>
  );
}

export default TestVR;

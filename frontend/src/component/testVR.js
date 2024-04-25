import React, { Component } from 'react';
import 'aframe';
import mp from './1.mp4';
import img1 from './1.png';

class TestVR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
    this.handleVideoDisplay = this.handleVideoDisplay.bind(this);
  }

  handleVideoDisplay() {
    setTimeout(() => {
      this.setState({ showVideo: true });
    }, 3000);
  }

  componentDidMount() {
    const scene = document.querySelector('a-scene');
    const camera = scene.querySelector('[camera]');
    
    window.addEventListener('deviceorientation', event => {
      const { alpha, beta, gamma } = event;
      camera.setAttribute('rotation', {
        x: beta,
        y: alpha,
        z: gamma
      });
    });

    this.handleVideoDisplay();
  }

  render() {
    return (
      <a-scene>
        <a-entity camera></a-entity>
        <a-assets>
          <img id="myPhoto" src="رابط_صورتك" alt="صورتك"></img>
        </a-assets>
        {/* House */}
        <a-entity
          id="house"
          gltf-model="url(رابط_ملف_المنزل)"
          position="0 0 -5"
        ></a-entity>
        {/* Draw the walls */}
        <a-box position="0 1.6 -5" width="10" height="3.2" depth="0.1" color="#CCCCCC"></a-box>
        <a-box position="0 1.6 3" width="10" height="3.2" depth="0.1" color="#CCCCCC"></a-box>
        <a-box position="-5 1.6 -2" width="0.1" height="3.2" depth="8" color="#CCCCCC"></a-box>
        <a-box position="5 1.6 -2" width="0.1" height="3.2" depth="8" color="#CCCCCC"></a-box>
        {/* Floor */}
        <a-plane position="0 0 -2" rotation="-90 0 0" width="10" height="10" color="#777"></a-plane>
        {/* Left Screen */}
        <a-plane position="-1.5 0 -3.5" rotation="0 -30 0" width="2.4" height="1" color="#000">
          {this.state.showVideo && (
            <a-video
              src={mp}
              width="2.3"
              height="1.4"
              position="0 1.6 0"
            ></a-video>
          )}
        </a-plane>
        {/* Right Screen */}
        <a-plane position="1.5 0 -3.5" rotation="0 30 0" width="2.4" height="1" color="#000">
          {this.state.showVideo && (
            <a-video
              src={mp}
              width="2.3"
              height="1.4"
              position="0 1.6 0"
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
          color="#CCCCCC"
        >
          <a-image
            src={img1}
            width="1.5"
            height="1.1"
            position="-3 0 0.01"
          ></a-image>
        </a-plane>
      </a-scene>
    );
  }
}

export default TestVR;

import React, { Component } from 'react';
import 'aframe';
import mp from './1.mp4'
import img1 from './1.png'

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
    // يمكنك هنا إضافة أكواد تفاعلية خاصة بتحريك المحتوى بحركة الجهاز
    // مثال: تحريك كاميرا العالم مع حركة الجهاز
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
          {/* إضافة أي موارد إضافية هنا (مثل الصور والفيديوهات) */}
          <img id="myPhoto" src="رابط_صورتك" alt="صورتك"></img>
        </a-assets>
        {/* منزل */}
        <a-entity
          id="house"
          gltf-model="url(رابط_ملف_المنزل)"
          position="0 0 -5"
        ></a-entity>
        {/* شاشة التلفاز */}
        <a-plane
          id="tv-screen"
          position="0 2.5 -3.5"
          rotation="0 0 0"
          width="2.4"
          height="1.8"
          color="#000"
          onMouseEnter={() => this.setState({ showVideo: true })}
          onMouseLeave={() => this.setState({ showVideo: false })}
        >
          {this.state.showVideo && (
            <a-video
              src={mp}
              width="2.3"
              height="1.7"
              position="0 0 0.01"
            ></a-video>
          )}
        </a-plane>
        {/* إطار الصورة */}
        <a-plane
          id="photo-frame"
          position="-2.5 2.5 -3.5"
          rotation="0 90 0"
          width="1.6"
          height="1.2"
          color="#fff"
        >
          <a-image
            src={img1}
            width="1.5"
            height="1.1"
            position="0 0 0.01"
          ></a-image>
        </a-plane>
      </a-scene>
    );
  }
}

export default TestVR;

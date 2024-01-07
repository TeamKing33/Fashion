import React from 'react'
import '../../css/Size.css'
const SizeKi =({handleChange}) =>{
  return (
    <div className="wrapper">
 <input type="checkbox" id="toggle" className="hidden-trigger"/>
<label htmlFor="toggle" className="circle">
  <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" xmlSpace="preserve" version="1.1" viewBox="0 0 48 48">
    <image width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC"></image>
  </svg>
</label>

  
  <div className="subs">
    <div className="sub-circle">
      <input value="1" onChange={handleChange} name="sub-circle" type="radio" id="sub1" className="hidden-sub-trigger"/>
      <label for="sub1">1</label>
    </div>
    <div className="sub-circle">
      <input value="2" onChange={handleChange} name="sub-circle" type="radio" id="sub2" className="hidden-sub-trigger"/>
      <label for="sub2">2</label>
    </div>
    <div className="sub-circle">
      <input value="3" onChange={handleChange} name="sub-circle" type="radio" id="sub3" className="hidden-sub-trigger"/>
      <label for="sub3">3</label>
    </div>
    <div className="sub-circle">
      <input value="4" onChange={handleChange} name="sub-circle" type="radio" id="sub4" className="hidden-sub-trigger"/>
      <label for="sub4">4</label>
    </div>
    <div className="sub-circle">
      <input value="5" onChange={handleChange} name="sub-circle" type="radio" id="sub5" className="hidden-sub-trigger"/>
      <label for="sub5">5</label>
    </div>
    <div className="sub-circle">
      <input value="6" onChange={handleChange} name="sub-circle" type="radio" id="sub6" className="hidden-sub-trigger"/>
      <label for="sub6">6</label>
    </div>
    <div className="sub-circle">
      <input value="7" onChange={handleChange} name="sub-circle" type="radio" id="sub7" className="hidden-sub-trigger"/>
      <label for="sub7">7</label>
    </div>
    <div className="sub-circle">
      <input value="8" onChange={handleChange} name="sub-circle" type="radio" id="sub8" className="hidden-sub-trigger"/>
      <label for="sub8">8</label>
    </div>
   </div>
</div>
  )
}

export default SizeKi

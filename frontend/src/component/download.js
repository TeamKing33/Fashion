import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import style from './css/download.module.css'
import apk from './Fashionwave.apk'
import Aos from 'aos'
import  "aos/dist/aos.css" 
function Download() {
 
  const navigate = useNavigate();
  
  useEffect(() => {
  
    const login = Cookies.get('login');
    if (login !== 'true') {
      
      navigate('/signin');
    }
  }, [navigate]);
    useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className={style.apk} data-aos="fade-right">
      <a href={apk} >Download APK</a>
    </div>
  )
}

export default Download

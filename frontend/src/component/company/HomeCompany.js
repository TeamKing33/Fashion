import React, { useEffect, useState } from 'react'

import { useNavigate ,NavLink} from 'react-router-dom'
import img from './image/icon.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Cookies from 'js-cookie';
import Aos from 'aos'
import  "aos/dist/aos.css" 
import { useTranslation } from 'react-i18next';

import styless from "./cssCompany/Home.module.css"
import axios from 'axios';



function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
    useEffect(()=>{
    Aos.init({duration:2000})
  },[])
 

//   useEffect(() => {
  
//     const login = Cookies.get('login');
//     if (login !== 'true') {
      
//       navigate('/signin');
//     }
//   }, [navigate]);
  return (
    <div>
    <div className={styless.bodyy}>
      <div className={styless.bodybac}>
      
      <div className="homei" data-aos="fade-right">
       
       
      </div>
      </div>
      {/* <Footer/> */}
    </div>
   

</div>
   

  )
}

export default Home;



import React, { useEffect, useState } from 'react'
import Discount from './design/Discount'
// import Imagehome from "./image/imagets/home.jpg" 
// import Navbars from './Navbars'
// import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import styless from "./css/Home.module.css"
import axios from 'axios';



function Home() {
  const navigate = useNavigate();
  const [name ,setName] = useState('');

  // axios.defaults.withCredentials =true;
  // useEffect(()=>{
  //   axios.get("https://fashion-server-mu.vercel.app/home")
  //   .then((res)=>{
  //     if(res.data.valid){
  //       setName(res.data.username)
  //     }else{
  //       navigate("/Signin")
  //     }
  //   })
  //   .catch(err => console.log(err))
  // },[])
  return (
    
    <div className={styless.bodyy}>
       <h1 className={styless.tex}>welcom {name}</h1>
      {/* <Navbars/> */}
      <div className={styless.bodybac}>
      
      {/* <img src={Imagehome} alt="" className='Imagehome'/> */}
      <div className="homei">
       
       
      <Discount/>
      </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;

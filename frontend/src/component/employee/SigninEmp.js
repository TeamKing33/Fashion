import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import back from "./back.mp4"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import stylesemp from "./cssemp/signinemp.module.css"
function SigninEmp() {
  const [fordata , setData] = useState({
    name:"",
    password:"",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...fordata,
      [e.target.name]: e.target.value,
    });
  };
  axios.defaults.withCredentials =true;

  const handleSubmit = async (e)=>{
    e.preventDefault();

    axios.post('https://fashion-server-mu.vercel.app/loginemp',fordata)
    .then(res=>{
      if(res.data.Login){
        alert("Data is correct")
        navigate("/employyee")
      }else{
        alert("Email or Password is incorrect");
      }
      console.log(res);
    })
    .catch(err => console.log(err))
    
  };
  
  return (
    // <div className=""></div>
    <div className={stylesemp.bodyemp}>
      
        <video className={stylesemp.videoBackground} autoPlay muted loop>
        <source src={back} type="video/mp4" />
      </video>
      <div className={stylesemp.containeremp}>
        
        <div className={stylesemp.boxenp}>
          <form onSubmit={handleSubmit} autoCapitalize="off">
            <div className={stylesemp.name}>
          <input type="text" placeholder="Enter Full name" name="name" required onChange={handleChange}/>
          <PersonIcon className={stylesemp.iconuser}/>
          </div>
          <div className={stylesemp.pass}>
          <input type="password" placeholder="Enter password" name="password" required onChange={handleChange}/>
          <LockIcon className={stylesemp.iconlock}/>
          </div>
          <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninEmp;

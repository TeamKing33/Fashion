import React,{useState,useEffect} from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import Img from "./css/w.png"
import axios from 'axios';
import SigninEmp from './employee/SigninEmp';
import styles from "./css/signup.module.css"

function Signin() {
  
    const [formData,setData] = useState({
        email:"",
        password:"",
    });
    const navigate = useNavigate();

  const handleChange =(e)=>{
    setData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };
  axios.defaults.withCredentials =true;
  
  useEffect(()=>{
    axios.get("https://fashion-server-mu.vercel.app/home")
    .then((res)=>{
      if(res.data.valid){
        navigate("/home");
      }else{
        navigate("/Signin")
      }
    })
    .catch(err => console.log(err))
  },[])
  const handleSubmit = async (e)=>{
    e.preventDefault();

    axios.post('https://fashion-server-mu.vercel.app/login',formData)
    .then(res=>{
      if(res.data.Login){
        alert("Data is correct")
      navigate("/home")
      }else{
        alert("Email or Password is incorrect");
      }
      console.log(res);
    })
    .catch(err => console.log(err))
    
  };
  useEffect(() => {
    
    document.body.classList.add(styles.signinBody);

    
    return () => {
      document.body.classList.remove(styles.signinBody);
    };
  }, []);
  return (
  
   
    
    <div className={styles.container}>
   
    <div className={styles.signbox}>
    <span className={styles.iconimage}>
    <img src={Img} alt="" />
    </span>
    <h1>Sign in </h1>
    <form onSubmit={handleSubmit}   >
   {/* <!-----inp--------------> */}
  
     <div className={styles.inp}>
        <input type="Email" placeholder="Email"name="email" required onChange={handleChange}/>
        <input type="password" placeholder="Password"name="password" required onChange={handleChange}/>
      
      
     </div>
     
     
     
     
     
     
     
     

  

  
  {/* <!-------------btn--------------> */}
  <div className={styles.btn} > 
 <button type="submit"name="submit">Register</button>
  </div>
  <div className={styles.texts}>
 <span> Already have an account? </span>

 
  <strong> <NavLink to ="/">Sign up </NavLink> Here</strong>

  </div>
   
  
   </form>
    </div>
    <NavLink to="/signinEmp"><button className={styles.btnemp}>employee</button></NavLink>
    </div>
    
  )
}

export default Signin;

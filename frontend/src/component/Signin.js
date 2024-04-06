import React,{useState,useEffect} from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import Img from "./css/w.png"
import axios from 'axios';
import SigninEmp from './employee/SigninEmp';
import Cookies from 'js-cookie';
import styles from "./css/signup.module.css"

function Signin() {
  const [login, setLogin] = useState(false);
    const [formData,setData] = useState({
        email:"",
        password:"",
    });
    const navigate = useNavigate();





  useEffect(() => {
    const loggedIn = Cookies.get('login');
    if (loggedIn === 'true') {
      setLogin(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fashion-server-mu.vercel.app/loginUser', formData);
      const responseData = response.data;
  
      if (responseData && responseData.Message === "Logged in successfully") {
        alert("Data is correct");
  
        
        Cookies.set('login', true, { expires: 7 * 24 });
  
        
        Cookies.set('email', formData.email, { expires: 7 * 24 });
  
        setLogin(true);
        navigate("/home");
      } else {
        alert("Wrong password or email");
      }
      console.log(response);
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
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
    <div>
    {login ? (
      navigate("/home")
    ):(
      <>
   {/* <!-----inp--------------> */}
  
     <div className={styles.inp}>
        <input type="Email" placeholder="Email"name="email" required value={formData.email} onChange={(e) => setData({ ...formData, email: e.target.value })}/>
        <input type="password" placeholder="Password"name="password" required value={formData.password} onChange={(e) => setData({ ...formData, password: e.target.value })}/>
      
      
     </div>
     
     
     
     
     
     
     
     

  

  
  {/* <!-------------btn--------------> */}
  <div className={styles.btn} > 
 <button type="submit"name="submit" onClick={handleSubmit}>Login</button>
  </div>
  <div className={styles.texts}>
 <span> Already have an account? </span>

 
  <strong> <NavLink to ="/">Sign up </NavLink> Here</strong>

  </div>
   
  </>
   )}
   </div>
   
    </div>
    <NavLink to="/signinEmp"><button className={styles.btnemp}>employee</button></NavLink>
    </div>
    
  )
}

export default Signin;

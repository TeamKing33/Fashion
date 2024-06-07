import React,{useState,useEffect} from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
// import Img from "./css/w.png"
import img2 from './image/model.png';
import img3 from './image/left.png';
import img4 from './image/left2.png';
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
  const [imageMoved, setImageMoved] = useState(false);

  const handleInputFocus = () => {
    setImageMoved(true);
  };
  const handleInputFocus2 = () => {
    setImageMoved(false);
  };
  return (
  
   
    
    <div className={styles.container}>
   
    <div className={styles.signbox}>
    <span className={styles.iconimage}>
    <img src={img3} alt="" className={imageMoved ? styles.moved : ''} style={{boxShadow: "none",width:"20px",height:"20px",position:"relative",left:"60px",top:"60px"}}/>
    <img src={img2} alt="" />
    <img src={img4} alt="" className={imageMoved ? styles.moved : ''} style={{boxShadow: "none",width:"20px",height:"20px",position:"relative",right:"60px",top:"60px"}}/>

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
        <input type="password" placeholder="Password"name="password" required value={formData.password} onChange={(e) => setData({ ...formData, password: e.target.value })}
                onFocus={handleInputFocus}
                onBlur={handleInputFocus2}
        />
      
      
     </div>
     
     
     
     
     
     
     
     

  

  
  {/* <!-------------btn--------------> */}
  <div className={styles.btn} > 
 <button type="submit"name="submit" onClick={handleSubmit}>Login</button>
  </div>
  <div className={styles.texts}>

 
  <strong> <NavLink to ="/SignupUser">Sign up </NavLink> Here</strong>

  </div>
   
  </>
   )}
   </div>
   
    </div>
    {/* <NavLink to="/signinEmp"><button className={styles.btnemp}>employee</button></NavLink> */}
    </div>
    
  )
}

export default Signin;

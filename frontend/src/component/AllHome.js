import React,{useEffect} from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import Aos from 'aos'
import  "aos/dist/aos.css" 
import style from './css/Allhome.module.css'
function Home() {
 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className={style.home}>
      <div className={style.flex}>
          {/* user */}
       <div className={style.user} data-aos="zoom-in-up">
       <div className={style.btn}>
       <NavLink to="/home" className={style.navLink}>user</NavLink>
        </div>
       </div>
        {/* company */}
       <div className={style.Company} data-aos="zoom-in">
        <div className={style.btn} >
        <NavLink to="/RegisterCompany" className={style.navLink}>Company</NavLink>
        </div>
        
       </div>
        {/* employees */}
       <div className={style.employees} data-aos="zoom-in">
        <div className={style.btn} >
        <NavLink to="/signinEmp" className={style.navLink}>employees</NavLink>
        </div>
        
       </div>
     
      </div>
    </div>
  )
}

export default Home

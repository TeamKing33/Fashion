import React, { useEffect, useState } from 'react'
import Discount from './design/Discount'
// import Imagehome from "./image/imagets/home.jpg" 
// import Navbars from './Navbars'
// import Footer from './footer'
import { useNavigate ,NavLink} from 'react-router-dom'
import img from './image/icon.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import DataHome from './DataHome';
import imgmen from './image/imageHome/1.png'
import imgwomen from './image/imageHome/2.png'
import imgchild from './image/imageHome/3.png'
import "./css/home.css"
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
    <div>
    <div className={styless.bodyy}>
       {/* <h1 className={styless.tex}>welcom {name}</h1> */}
      {/* <Navbars/> */}
      <div className={styless.bodybac}>
      
      {/* <img src={Imagehome} alt="" className='Imagehome'/> */}
      <div className="homei">
       
       
      <Discount/>
      </div>
      </div>
      {/* <Footer/> */}
    </div>
    <div className={styless.imageName}>
      {/* men */}
      <div className={styless.imageHome}>
        <NavLink className={styless.NavLink} to='/productMen'>
        <img src={imgmen}/>
        <h3 className={styless.textimg}>Men</h3>
        </NavLink>
      </div>
      
      {/* women */}
      <div className={styless.imageHome}>
      <NavLink className={styless.NavLink} to='/productWomen'>
        <img src={imgwomen}/>
        <h3 className={styless.textimg}>Women</h3>
        </NavLink>
      </div>
      {/* kids & baby */}
      <div className={styless.imageHome}>
      <NavLink className={styless.NavLink} to='/productKids'>
        <img src={imgchild}/>
        <h3 className={styless.textimg}>Kids</h3>
        </NavLink>
      </div>
    </div>
    <Row xs={2}  md={2} lg={2} className="cardhome g-2">
          {DataHome && DataHome.map((item) => (
 
    <Col key={item.id}>
    <Card className="cardsss">
     <span className="card__hover">{item.cardHover}</span>
     <figure className="card__figure">
     {item.cardfigure}
     </figure>
    <div className="card__info">
       <span className="card__ocupation"> 
       {item.cardocupation}
 </span>
      <div className="card__links">
        <div className='svg' ><i class="fa-brands fa-facebook"></i></div>
        <div className='svg' ><i class="fa-brands fa-instagram"></i></div>
        <div className='svg' ><i class="fa-brands fa-twitter"></i></div>
       </div>
    </div>

      </Card>

    </Col>
))}
</Row>
</div>
       








   

  )
}

export default Home;



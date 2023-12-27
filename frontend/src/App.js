import React,{useState,useEffect} from 'react';

import Navbars from './component/Navbars';
import { Routes,Route,BrowserRouter} from "react-router-dom";
import Cards from './component/Cards';
import AllCard from './component/AllCard.js';
import Tshirt from './component/Tshitr/Tshirt';
import Home from './component/Home';
import Footer from './component/footer';
import Tshirt2 from './component/Tshitr/Tshirt2';
import Tshirt3 from './component/Tshitr/Tshirt3';
import Tshirt4 from './component/Tshitr/Tshirt4';
import Signup from './component/Signup';
import Signin from './component/Signin'
import Support from './component/Support';
import SigninEmp from './component/employee/SigninEmp';
import Employyee from './component/employee/Employee.js'
import CartItem from './component/CartItem.js';
import Micro from './component/Micro.js';
import './App.css';
import axios from 'axios';
const App = ()=>{
  // const [show, setShow] =useState(true);

  // const [cart, setCart] = useState([]);

  const [warning , setWarning] = useState(false);

  const [data , setData] =useState([]);

  useEffect(()=>{
    fetch('https://fashion-server-mu.vercel.app/addtocart')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  })

  
  const handleClick = () => {
    axios.post('https://fashion-server-mu.vercel.app/addtocart')
    let isPresnt =false;
    data.forEach((product)=>{
      if(data.id == product.id)
      isPresnt= true;
    })
    if(isPresnt){
      setWarning(true); 
      setTimeout(()=>{
        setWarning(false);
      },2000);
      return;
    }
  setData([...data]);
  };

  // const handleChange = (item,d)=>{
  //   let ind = -1;
  //   cart.forEach((data,index)=>{
  //     if(data.id === item.id)
  //     ind = index ;
  //   });
  //   const tempArr = cart;
  //   tempArr[ind].number += d;
  //   if(tempArr[ind].number === 0)
  //   tempArr[ind].number =1;
  // setCart([...tempArr])
  // } 
  return (
    
    <BrowserRouter>
    
    <div className="App">
    
      
   
        <Routes>
        
        <Route path="/" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/signinEmp" element={<SigninEmp/>}/>
        <Route path="/employyee" element={<Employyee/>}/>
         
          
          <Route path="/cartitem" element={<CartItem data={data} setData={setData}  />} />

          <Route path="/T-shirt" element={<Tshirt/>}/>
          <Route path="/T-shirt2" element={<Tshirt2/>}/>
          <Route path="/T-shirt3" element={<Tshirt3/>}/>
          <Route path="/T-shirt4" element={<Tshirt4/>}/>

          {/* Home */}
          <Route path="/home" element={
            <div>
          <Navbars size={data.length}  />
          {/* <Home/> */}
          <Micro/>

           < Home />
          
          
          <Footer/>
          </div>
        }/>

        {/* Support */}
        <Route path="/support" element={
        <div>
         <Navbars size={data.length}  />
         {/* <Micro/> */}
        <Support />
      
        <Footer/>
        </div>
        } />

       

        {/* Product */}
          <Route path="/product" element={
          <div>
             <Navbars size={data.length}  />
              <Micro/>
             < AllCard handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          <Footer/>
          </div>
          } />
        </Routes>
        
    </div>
    
    {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;

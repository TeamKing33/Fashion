import React,{useState,useEffect, lazy, Suspense} from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";
import axios from 'axios';

import Cards from './component/Cards';
// import Home from './component/Home';
//  import AllCard from './component/AllCard.js';
// import Support from './component/Support';

import Navbars from './component/Navbars';
import Footer from './component/footer';

import Tshirt from './component/Tshitr/Tshirt';
import Tshirt2 from './component/Tshitr/Tshirt2';
import Tshirt3 from './component/Tshitr/Tshirt3';
import Tshirt4 from './component/Tshitr/Tshirt4';
import Signup from './component/Signup';
import Signin from './component/Signin'
import SigninEmp from './component/employee/SigninEmp';
import Employyee from './component/employee/Employee.js'
import CartItem from './component/CartItem.js';
import Micro from './component/Micro.js';
import Loading from './component/Loading.js';
import './component/css/Cards.css'
import './App.css';
const Home = lazy(()=> import('./component/Home.js'))
const Support = lazy(()=> import('./component/Support'))
const AllCard = lazy(()=> import('./component/AllCard.js'))


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
        {/* <Suspense fallback={<Loading/>}> */}

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
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars size={data.length}  />
          {/* <Home/> */}
          <Micro/>
          
           < Home />
          
          
          <Footer/>
          </div>
          </React.Suspense>
        }/>

        {/* Support */}
        <Route path="/support" element={
          <React.Suspense fallback={<Loading/>}>
        <div>
         <Navbars size={data.length}  />
         {/* <Micro/> */}
        <Support />
      
        <Footer/>
        </div>
        </React.Suspense>
        } />

       

        {/* Product */}
          <Route path="/product" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={data.length}  />
              <Micro/>
             < AllCard handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          <Footer/>
          </div>
          </React.Suspense>
          } />

        </Routes>
        
    </div>
    
    {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;

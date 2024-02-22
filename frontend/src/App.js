import React,{useState,useEffect, lazy, Suspense} from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";


import Cards from './component/Cards';
// import Home from './component/Home';
//  import AllCard from './component/AllCard.js';
// import Support from './component/Support';

import Navbars from './component/Navbars';
import Footer from './component/footer';


import Signup from './component/Signup';
import Signin from './component/Signin'
import SigninEmp from './component/employee/SigninEmp';
import Employyee from './component/employee/Employee.js'
import CartItem from './component/CartItem.js';
import Micro from './component/Micro.js';
import Loading from './component/Loading.js';
import NotFound from './component/NotFound.js'
import './component/css/Cards.css'
import './App.css';

// Cookies
// import { useCookies } from 'react-cookie';
// lazy

const Home = lazy(()=> import('./component/Home.js'))
const Support = lazy(()=> import('./component/Support'))
const AllCard = lazy(()=> import('./component/AllCard.js'))
const AllMen = lazy(()=> import('./component/Men/AllMen'))
const Allwomen = lazy(()=> import('./component/Women/AllWomen'))
const AllKids = lazy(()=> import('./component/Kids/AllKids'))

// lazy clothes women

const WomenCl = lazy(()=> import('./component/Tshitr/WomenClothes/WomenCl.js'))
const WomenCl2 = lazy(()=> import('./component/Tshitr/WomenClothes/WomenCl2.js'))
const WomenCl3 = lazy(()=> import('./component/Tshitr/WomenClothes/WomenCl3.js'))

// lazy clothes men

const Tshirt = lazy(()=> import('./component/Tshitr/Tshirt'))
const Tshirt2 = lazy(()=> import('./component/Tshitr/Tshirt2'))
const Tshirt3 = lazy(()=> import('./component/Tshitr/Tshirt3'))
const Tshirt4 = lazy(()=> import('./component/Tshitr/Tshirt4'))
const Dwon = lazy(()=> import('./component/download.js'))


// lazy clothes kids

const KidsCl = lazy(()=> import('./component/Tshitr/KidsClothes/KidsCl.js'))
const  KidsCl2 = lazy(()=> import('./component/Tshitr/KidsClothes/KidsCl2.js'))
const  KidsCl3 = lazy(()=> import('./component/Tshitr/KidsClothes/KidsCl3.js'))
const  KidsCl4 = lazy(()=> import('./component/Tshitr/KidsClothes/KidsCl4.js'))




const App = ()=>{
  // const [show, setShow] =useState(true);

  // const [cart, setCart] = useState([]);

  // const [cart , setcart] =useState([]);


  const [warning , setWarning] = useState(false); 
  const [cart, setCart] = useState([]);
  

  const removeFromCart = (productIndex) => {
    const updatedCart = cart.filter((_, index) => index !== productIndex);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClick = (product) => {
   
    const updatedCart = [...cart, product];
    const isPresent = cart.some((item) => item.id === product.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  // const handleChange = (item,d)=>{
  //   let ind = -1;
  //   cart.forEach((cart,index)=>{
  //     if(cart.id === item.id)
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
         <Route path="*" element={
          <div>
          <Navbars size={cart.length}  />
         <NotFound/>
         </div>
         }/>
          
          <Route path="/cartitem" element={
            <div>
             {/* <Navbars size={cart.length}  /> */}

          <CartItem data={cart} removeFromCart={removeFromCart} setData={setCart} handleClick={handleClick} />
          </div>
          } />
          {
            warning && alert("Item is already added to cart")
          }
          {/*  lazy clothes*/}
          
          {/* Men */}
          <Route path="/T-shirt" element={
           <React.Suspense fallback={<Loading/>}>
          <div>
          <Navbars size={cart.length}  />
              <Micro/>
          <Tshirt/>
          </div>
          </React.Suspense>
          }/>

     <Route path="/T-shirt2" element={
           <React.Suspense fallback={<Loading/>}>
          <div>
          <Navbars size={cart.length}  />
              <Micro/>
          <Tshirt2/>
          </div>
          </React.Suspense>
          }/>
          
          
          <Route path="/T-shirt3" element={
           <React.Suspense fallback={<Loading/>}>
          <div>
          <Navbars size={cart.length}  />
              <Micro/>
          <Tshirt3/>
          </div>
          </React.Suspense>
          }/>
        
        <Route path="/T-shirt4" element={
           <React.Suspense fallback={<Loading/>}>
          <div>
          <Navbars size={cart.length}  />
              <Micro/>
          <Tshirt4/>
          </div>
          </React.Suspense>
          }/>
          {/* end Men */}

          {/* WomenClothes */}
          <Route path="/WomenClothes" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < WomenCl/> 
             
           
          </div>
          </React.Suspense>
          } />


  <Route path="/WomenClothes2" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < WomenCl2/> 
             
              
          </div>
          </React.Suspense>
          } />



   <Route path="/WomenClothes3" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < WomenCl3/> 
           </div>
           </React.Suspense>
            } />

              {/* end WomenClothes */}



               {/* KidsClothes */}
          <Route path="/KidsClothes" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < KidsCl/> 
          </div>
          </React.Suspense>
          } />


  <Route path="/KidsClothes2" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < KidsCl2/> 
             
             
          </div>
          </React.Suspense>
          } />



   <Route path="/KidsClothes3" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < KidsCl3/> 
           </div>
           </React.Suspense>
            } />

            <Route path="/KidsClothes4" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < KidsCl4/> 
           </div>
           </React.Suspense>
            } />


              {/* end Kids */}


             {/*  lazy clothes end*/}


          {/* Home */}
          <Route path="/home" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars size={cart.length}  />
          {/* <Home/> */}
          <Micro/>
          
           < Home />
          
          
          <Footer/>
          </div>
          </React.Suspense>
        }/>
          <Route path="/download" element={
            <React.Suspense fallback={<Loading/>}>
            <div>
          <Navbars size={cart.length}  />
          {/* <Home/> */}
          <Micro/>
          
           < Dwon />
          
          
          {/* <Footer/> */}
          </div>
          </React.Suspense>
        }/>

        {/* Support */}
        <Route path="/support" element={
          <React.Suspense fallback={<Loading/>}>
        <div>
         <Navbars size={cart.length}  />
         <Micro/>
        <Support />
      
        <Footer/>
        </div>
        </React.Suspense>
        } />

       

        {/* Product */}
          <Route path="/product" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < AllCard handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          <Footer/>
          </div>
          </React.Suspense>
          } />


          {/* ProductMen */}
          <Route path="/productMen" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < AllMen handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          <Footer/>
          </div>
          </React.Suspense>
          } />  


          {/* ProductWomen */}
          <Route path="/productWomen" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < Allwomen handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          <Footer/>
          </div>
          </React.Suspense>
          } />


   <Route path="/productKids" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              <Micro/>
             < AllKids handleClick={handleClick}/> 
             
             
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

import React,{useState} from "react";
// import { NavLink} from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom'

import data from "./Data";
// import { Button} from "react-bootstrap";
import Navbars from './Navbars'
import Footer from './footer'
import "./css/Cards.css"
import axios from "axios";

const  Cards =({item,handleClick})=>{

  const [sendData,setsendData ] = useState({
    id:item.id,
    img: item.img,
    title: item.title,
    number:item.number,
    discount:item.discount,
    price:item.price,
  })

  

const navigate = useNavigate()

  const handleChange =(e)=>{
    setsendData(prev =>({...prev,[e.target.name]:[e.target.value]}))
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();

    axios.post('https://fashion-server-mu.vercel.app/addtocart',sendData)
    .then(res=>
      {
        console.log(res);
        if (res.data && res.data.Message === "Item is already added to cart") {
          alert("Product already exists in the cart");
      }else{
        // navigate('/home')
      }
      })
    .catch(err => console.log(err))


  }
  const {id,title,discountCard,img,discount,price,description,button,number} =item;

  return (
    <div className="bodycar">

      <form onSubmit={handleSubmit}>

              <span>{discountCard}</span>
              <img src={img} className="card-img-top" onChange={handleChange}/>
              <div className="card-body">
                <h5 className="card-title" onChange={handleChange}>{title}</h5>
                <div className="flex">
                <p className="card-textt" onChange={handleChange}>${discount}</p>
                <p className="card-textt colorsdis" onChange={handleChange}><s>{price}</s></p>
                </div>
                <span className="card-text">{description}</span>
              </div>
              <div className="btnaddtocart">
              <button onClick={()=>handleClick(item)} className="CartBtn">
              <span className="IconContainer"> 
              <svg xmlns="http://www.w3.org/2000/svg"
              height="1em" viewBox="0 0 576 512"
              fill="rgb(17, 17, 17)" className="cart">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
              </path>
              </svg>
             </span>
             <p className="textaddtocart">Add to Cart</p>
          </button>
             <div className="btnbuy"></div>
              {button}
          </div>
              </form>
             
            </div>
    
    
  
      
    
    
   
   
  );
}

export default Cards;
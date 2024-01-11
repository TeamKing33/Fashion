import React,{useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import ".././css/Cards.css"
import axios from "axios";

const Kids = ({item,handleClick}) => {
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
                  <img src={img} className="card-img-top imagecard" onChange={handleChange}/>
                  <div className="card-body">
                    <h5 className="card-title title" onChange={handleChange}>{title}</h5>
                    <div className="flex">
                    <p className="card-textt" onChange={handleChange}>EGP{discount}</p>
                    <p className="card-textt colorsdis" onChange={handleChange}><s>{price}</s></p>
                    </div>
                    <span className="card-text description">{description}</span>
                  </div>
                  <div className="btnaddtocart">
                  <button onClick={()=>handleClick(item)} className="CartBtn">Add to Cart</button>
                 <div className="btnbuy"></div>
                  {button}
              </div>
                  </form>
                 
                </div>
      );
}
export default Kids;
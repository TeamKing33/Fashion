import React,{useState} from "react";
// import { NavLink} from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom'
// import data from "./Data";
// import { Button} from "react-bootstrap";
// import Navbars from './Navbars'
// import Footer from './footer'
import "./css/Cards.css"
import axios from "axios";
import { useTranslation } from 'react-i18next';

const  Cards =({item,handleClick})=>{
  const { t, i18n } = useTranslation();
  
  const [sendData,setSendData ] = useState({
    id:item.id,
    img: item.img,
    title: item.title,
    number:item.number,
    discount:item.discount,
    price:item.price,
  })

  

const navigate = useNavigate()

const handleChange = (e) => {
  setSendData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  // const handleSubmit = async(e)=>{
  //   e.preventDefault();

  //   axios.post('http://localhost:8083/addtocart',sendData)
  //   .then(res=>
  //     {
  //       console.log(res);
  //       if (res.data && res.data.Message === "Item is already added to cart") {
  //         alert("Product already exists in the cart");
  //     }else{
  //       // navigate('/home')
  //     }
  //     })
  //   .catch(err => console.log(err))


  // }

  const handleAddToCart = () => {
    handleClick(item); // Trigger the handleClick function to add the item to the cart

    // Uncomment and adjust the following code for Axios request to add the product to the cart
    /*
    axios.post('http://localhost:8083/addtocart', sendData)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.Message === 'Item is already added to cart') {
          alert('Product already exists in the cart');
        } else {
          // Use navigate if needed
          // navigate('/home');
        }
      })
      .catch((err) => console.log(err));
    */
  };

  const {id,title,discountCard,img,discount,price,description,button,number} =item;

  return (
    <div className="bodycar">

      <div >
              <span>{discountCard}</span>
              <img src={img} className="card-img-top imagecard" onChange={handleChange}/>
              <div className="card-body">
                <h5 className="card-title title" onChange={handleChange}>{title}</h5>
                <div className="flex">
                <p className="card-textt" onChange={handleChange}>{t("EGP")}{discount}</p>
                <p className="card-textt colorsdis" onChange={handleChange}><s>{t("EGP")}{price}</s></p>
                </div>
                <span className="card-text description">{description}</span>
              </div>
              <div className="btnaddtocart">
              <button onClick={()=>handleClick(item)} className="CartBtn">{t("Add to Cart")}</button>
             <div className="btnbuy"></div>
              {button}
          </div>
              </div>
             
            </div>
    
    
  
      
    
    
   
   
  );
}

export default Cards;
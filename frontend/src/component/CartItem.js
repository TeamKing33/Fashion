import React,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cards from './Cards';

import stylesitem from "./css/Cartitem.css"
import Cookies from 'js-cookie';

const CartItem = ({ data, setData, removeFromCart, handleClick }) => {

    
  const navigate = useNavigate();
  
  useEffect(() => {
  
    const login = Cookies.get('login');
    if (login !== 'true') {
      
      navigate('/signin');
    }
  }, [navigate]);
  
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setData(storedCart);

        // Calculate total price
        const total = storedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setPrice(total);
    }, [setData]);
      
      
    // const handleChange = async (item, d) => {
    //     await axios.put(`http://localhost:8083/update/${item.id}`);
    
    //     // Create a new array with updated values
    //     const updatedData = number.map((dataItem) =>
    //       dataItem.id === item.id ? { ...dataItem, number: dataItem.number + d } : dataItem
    //     );
    
    //     setNumber([...updatedData]);
    //   };

//     const [formData,setFormData] = useState({
//         img: "",
//         title:"",
//         discount:""
//       });


      
//   const handleChange =(e)=>{
//     setFormData(prev=>({...prev,[e.target.name]:[e.target.value]}))
  
//   };
//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//       axios.post('http://localhost:8083/sendorder',formData)
//       .then(res=>
//         {
//           console.log(res);
//         //   navigate('/home')
//         })
//       .catch(err => console.log(err))

//   };
      

    const [price , setPrice] = useState(0);
    const handlePrice = () =>{
        let ans = 0;
        data.map((item)=>(
            ans += item.number * item.discount
        ))
        setPrice(ans)
    }
    // const handleRemove = async(id) => {
    //     try{
    //         await axios.delete(`http://localhost:8083/remove/${id}`)
    //         window.location.reload()
    //        }catch(err){
    //         console.log(err);
    //        }
    // };
    useEffect(()=>{
        handlePrice();
    },[data])


    const handleSubmit = async () => {
        try {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            const userEmail = Cookies.get('email'); // Replace 'email' with the actual name of the cookie storing the email
    
            // Group items by their ID
            const groupedCartData = {};
            cartData.forEach(item => {
                const id = item.id;
                if (!groupedCartData[id]) {
                    groupedCartData[id] = [];
                }
                groupedCartData[id].push(item);
            });
    
            // Convert grouped data into an array
            const groupedItems = Object.values(groupedCartData);
    
            // Send a separate request for each group
            for (const group of groupedItems) {
                await axios.post('https://fashion-server-mu.vercel.app/addtocart', { data: group, email: userEmail });
            }
    
            alert("Data Inserted Successfully");
            localStorage.removeItem('cart');
            window.location.reload(); 
        } catch (error) {
            console.error('Error sending data:', error.response || error.message || error);
        }
    };
    
    
      
    
    
    
    
    
    
    
    
      
      
    
      
      
    
    

    return (
        <div className="bodyItem">
        <article>
            {data.map((item, i) => (
                <div className="cartbox" key={i}>
                    <div className="cartimg">
                        <img src={item.img} alt="" name={`img[${i}]`} />
                        <p name={`title[${i}]`}>{item.title}</p>
                    </div>
                    <div className="incdec">
                        <button hidden>{item.number}</button>
                    </div>
                    <div className="remoprice">
                        <span name={`discount[${i}]`}>${item.discount}</span>
                        <button onClick={() => removeFromCart(i)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span className="texttotal">Total price of your cart</span>
                <span className="totalre">Rs - ${price}</span>
            </div>
            <button className="btn-31" onClick={handleSubmit}>
                <span className="text-container">
                    <span className="textbtnn">send</span>
                </span>
            </button>
        </article>
    </div>
    );
    
  };

  export default CartItem;
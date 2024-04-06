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
  
   

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setData(storedCart);
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


      

    const [price , setPrice] = useState(0);
    const handlePrice = () =>{
        let ans = 0;
        data.map((item)=>(
            ans += item.number * item.discount
        ))
        setPrice(ans)
    }
   
    useEffect(()=>{
        handlePrice();
    },[data])


    const handleSubmit = async () => {
        try {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            const userEmail = Cookies.get('email'); 
    
          
            const groupedCartData = {};
            cartData.forEach(item => {
                const id = item.id;
                if (!groupedCartData[id]) {
                    groupedCartData[id] = [];
                }
                groupedCartData[id].push(item);
            });
    
          
            const groupedItems = Object.values(groupedCartData);
    
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
    
    
    
    
    const decrease = (id) => {
        setData(prevData => {
            const updatedData = prevData.map(item => (
                item.id === id ? { ...item, number: Math.max(item.number - 1 ,0)} : item
            ));
            updateLocalStorage(updatedData);
            return updatedData;
        });
    };
    
    const increase = (id) => {
        setData(prevData => {
            const updatedData = prevData.map(item => (
                item.id === id ? { ...item, number: item.number + 1 } : item
            ));
            updateLocalStorage(updatedData);
            return updatedData;
        });
    };
    
    const updateLocalStorage = (updatedData) => {
        try {
            localStorage.setItem('cart', JSON.stringify(updatedData));
        } catch (error) {
            console.error('Error updating localStorage:', error.message || error);
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
                    <button onClick={() => increase(item.id)}>+</button>
                    <button>{item.number}</button>
                    <button onClick={() => decrease(item.id)}>-</button>
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
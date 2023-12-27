import React,{useEffect, useState}from 'react'
import axios from 'axios';
import Cards from './Cards';
import stylesitem from "./css/Cartitem.css"

const CartItem = ({data,setData}) => {

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
    const handleRemove = async(id) => {
        try{
            await axios.delete(`https://fashion-server-mu.vercel.app/remove/${id}`)
            window.location.reload()
           }catch(err){
            console.log(err);
           }
    };
    useEffect(()=>{
        handlePrice();
    },[data])

    
    

    return (
        <div className="bodyItem">
            {/* <form onSubmit={handleSubmit}> */}
       <article >
        {
            data.map((item,i)=>(
                <div className="cartbox" key={i.id}>
                    <div className="cartimg" >
                        <img src={item.img} alt="" name="img" />
                        <p name="title" >{item.title}</p>
                    </div>
                    <div className="incdec">
                      <button hidden>{item.number}</button>
                    </div>
                    <div className="remoprice">
                        <span name="discount" >${item.discount}</span>
                        <button onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        <div className="total">
            <span className="texttotal">Total price of your cart</span>
            <span className="totalre">Rs - ${price}</span>
        </div>
        <button className="btn-31">
       <span className="text-container">
       <span className="textbtnn">send</span>
       </span>
       </button>

       </article>
       {/* </form> */}
       </div>
    );
    
  };

  export default CartItem;
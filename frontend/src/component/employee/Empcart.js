import React,{useEffect, useState} from 'react'
import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styleess from './cssemp/employee.module.css'

function Empcart() {
    const [dataCart , setDataCart]=useState([])
    useEffect(()=>{
        fetch('https://fashion-server-mu.vercel.app/productscart')
        .then(res=> res.json())
        .then(cart => setDataCart(cart))
        .catch(err => console.log(err))
      })

      
  const navigate = useNavigate();

  // useEffect(() => {
  
  //   const login = Cookies.get('loginemp');
  //   if (login !== 'true') {
      
  //     navigate('/signinEmp');
  //   }
  // }, [navigate]);
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://fashion-server-mu.vercel.app/removeCart/${id}`);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };
  
  return (
    <div className={styleess.bodyenplo}>
      
    <div className={styleess.tablee}>
    <h1 className={styleess.h1}>
      Fashion Wave
    <NavLink to="/Employyee2"> add to cart</NavLink>

    </h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>image</th>
          <th>title</th>
          <th>number</th>
          <th>discount</th>
          <th>price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {dataCart.map((d,i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.email}</td>
            <td><img src={d.img} alt=""  className={styleess.image}/></td>
            <td>{d.title} LE</td>
            <td>{d.number}</td>
            <td>{d.discount}</td>
            <td>{d.price}</td>
            <button onClick={() => handleRemove(d.id)}>Delete</button>            
          </tr>
        ))}
   
      </tbody>
    </table>
  </div>


  

  

</div>
  )
}

export default Empcart

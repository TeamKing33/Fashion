import React,{useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';
import styleess from './cssemp/employee.module.css'
function Employee() {
  const [data , setData] =useState([]);
  useEffect(()=>{
    fetch('https://fashion-server-mu.vercel.app/clothes')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  })

  


  const navigate = useNavigate();

  useEffect(() => {
  
    const login = Cookies.get('loginemp');
    if (login !== 'true') {
      
      navigate('/signinEmp');
    }
  }, [navigate]);


  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://fashion-server-mu.vercel.app/remove/${id}`);
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
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>size</th>
            <th>number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td><img src={d.image} alt="" /></td>
              <td>{d.result} LE</td>
              <td>{d.quantity}</td>
              <td>{d.size}</td>
              <td>{d.number}</td>
              <button onClick={() => handleRemove(d.id)}>Delete</button>            
            </tr>
          ))}
     
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Employee

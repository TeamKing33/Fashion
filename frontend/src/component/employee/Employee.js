import React,{useEffect, useState} from 'react'
import styleess from './cssemp/employee.module.css'
function Employee() {
  const [data , setData] =useState([]);
  useEffect(()=>{
    fetch('https://fashion-server-mu.vercel.app/clothes')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  })
 
  return (
    <div className={styleess.bodyenplo}>
      
      <div className={styleess.tablee}>
      <h1 className={styleess.h1}>Fashion Wave</h1>
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
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.image}</td>
              <td>{d.result} LE</td>
              <td>{d.quantity}</td>
              <td>{d.size}</td>
              <td>{d.number}</td>
            </tr>
          ))}
     
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Employee

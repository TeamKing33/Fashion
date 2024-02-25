import React,{useEffect, useState} from 'react'
import Img1 from '../../image/imageHome/imagekids2/1.png'
import Img2 from '../../image/imageHome/imagekids2/2.png';
import Img3 from '../../image/imageHome/imagekids2/3.png';
import Img4 from '../../image/imageHome/imagekids2/4.png';
import SizeKi from './SizeKi';
// import Navbars from '../Navbars';
import FooterTs from '../FooterTs';
// import Footer from '../footer';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Tshirt.css'


function KidsCl2() {

  useEffect(() => {
    $('#number').mask('000 0000 0000');
  }, []);

  const [formData,setData] = useState({
    email:"",
    name:"",
    image: Img1,
    result:"",
    quantity:"",
    size:"",
    number:"",
  });

  const handleSizeChange = (selectedSize) => {
    setData((prev) => ({ ...prev, size: selectedSize }));
    
  };

  const navigate = useNavigate();

  const handleChange =(e)=>{
    setData(prev=>({...prev,[e.target.name]:e.target.value}))
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = Cookies.get('email');
    console.log(formData);
    const updatedFormData = { ...formData, email: userEmail };
  
    axios.post('https://fashion-server-mu.vercel.app/product', updatedFormData)
      .then(res => {
        console.log(res);
        alert("Data Inserted Successfully");
        // navigate('/home')
      })
      .catch(err => console.log(err));
  };


   const [conimg ,setimg]= useState(Img1)
   const [result,setresult] =useState('')
   const [inputvalue,setinputvalue] =useState('')
   const opnedd =(small)=>{
    setimg(small);
   }
   const change = (event) => {
    const value = parseInt(event.target.value, 10) || "";
    setinputvalue(value);
    const calculatedResult = value * 40;
    setresult(calculatedResult);
    setData((prev) => ({ ...prev, result: calculatedResult }));
  };
  
    return (
      <div>
        {/* <Navbars/> */}
     
      <div className="container">
        
        <div className="image">
          <div className="con-image">
            <img src={conimg} alt="" id="cont" />
          </div>
          <div className="imagechild">
            <img src={Img1} alt="" onClick={()=>opnedd(Img1)}/>
            <img src={Img2} alt="" onClick={()=>opnedd(Img2)}/>
            <img src={Img3} alt="" onClick={()=>opnedd(Img3)}/>
            <img src={Img4} alt="" onClick={()=>opnedd(Img4)}/>
          </div>
        </div>
        <div className="text">
        Discover our charming Baby Girl Outfits, a perfect blend of comfort and style for the fall and winter seasons. This set includes a cozy cotton long-sleeve romper paired with matching pants, ensuring warmth and cuteness. The high-quality materials and thoughtful design make these outfits ideal for any occasion. Dress your little one in this adorable ensemble for a perfect combination of fashion and functionality.
          
    <form onSubmit={handleSubmit}>
    <div className="box_size">
          <div className={`size ${formData.size === "1-2" ? 'selected' : ''}`}
               name="size"
              onClick={() => handleSizeChange("1-2")}>
            1-2
          </div>
          <div className={`size ${formData.size === "3-4"? 'selected' : ''}`}
           name="size"
           onClick={() => handleSizeChange("3-4")}>
            3-4
          </div>
          <div className={`size ${formData.size === "5-6" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("5-6")}>
            5-6
          </div>
          <div className={`size ${formData.size === "7-8" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("7-8")}>
            7-8
          </div>
         </div>
         <div className="price">
    
    <input type="hidden" name="result" value={result} />
    <div className="result">
        <span>{result} EGP</span>
        <div className='flex2'>
      {<SizeKi handleChange={handleChange}/>}
        </div>  
        <input type="text" name="name" placeholder="Enter your Name" spellCheck="false" required onChange={handleChange}/>
        <input type="text" name="quantity" placeholder='Enter Quantity' value={inputvalue}
         onChange={(e) => {
         handleChange(e);
         change(e);
}}
required/>
        <input type="text" name="number" id="number" placeholder='Enter your Number' required onChange={handleChange}/>
        <button className='btn-price' type="submit" name="submit">Buy Now</button>
    </div>
    </div>
</form>

        </div>
  
      </div>
     
     < FooterTs/>


      </div>
    );
  }

export default KidsCl2;




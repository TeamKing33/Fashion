import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Img1 from '../image/imagests5/1.png';
import Img2 from '../image/imagests5/2.png';
import Img3 from '../image/imagests5/3.png';
import Img4 from '../image/imagests5/4.png';
import Cookies from 'js-cookie';
// import Navbars from '../Navbars';
import FooterTs from './FooterTs';
import '../css/Tshirt.css'

let white1 = "Tshirt4";
function Tshirt4() {
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
    const calculatedResult = value * 130;
    setresult(calculatedResult);
    setData((prev) => ({ ...prev, result: calculatedResult }));
   }
    return (
      <div>
        
      
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
        Essence of Our T-Shirts Introduction: Explore the world of our T-shirts, where premium cotton meets precision stitching for enduring comfort and style. Key Points: Fabric of Comfort: Luxurious, breathable cotton for a soft feel against the skin. Stitching Perfection: Impeccable craftsmanship for lasting durability. Designs that Transcend: Express your individuality with timeless, expressive designs. Durability Beyond Fashion: Enduring quality
         for a T-shirt that stand .


          
    <form onSubmit={handleSubmit}>
    <h3 className='textSize'>Size</h3>
    <div className="box_size">
          <div className={`size ${formData.size === "S" ? 'selected' : ''}`}
               name="size"
              onClick={() => handleSizeChange("S")}>
            S
          </div>
          <div className={`size ${formData.size === "M"? 'selected' : ''}`}
           name="size"
           onClick={() => handleSizeChange("M")}>
            M
          </div>
          <div className={`size ${formData.size === "XL" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("XL")}>
           XL
          </div>
          <div className={`size ${formData.size === "2XL" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("2XL")}>
            2XL
          </div>
          <div className={`size ${formData.size === "3XL" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("3XL")}>
            3XL
          </div>
          <div className={`size ${formData.size === "4XL" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("4XL")}>
            4XL
          </div>
         </div>
    <div className="price">
    <input type="hidden" name="result" value={result} />
    <div className="result">
        <span>{result} EGP</span>
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
      <FooterTs/>
      </div>
    );
  }

export default Tshirt4;


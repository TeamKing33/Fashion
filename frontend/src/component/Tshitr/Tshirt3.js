import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Img1 from '../image/imagests3/1.png';
import Img2 from '../image/imagests3/2.png';
import Img3 from '../image/imagests3/3.png';
import Img4 from '../image/imagests3/4.png';
import Navbars from '../Navbars';
import FooterTs from './FooterTs';
import '../css/Tshirt.css'

let white1 = "Tshirt3";
function Tshirt3() {
  useEffect(() => {
    $('#number').mask('000 0000 0000');
  }, []);
  

  
  const [formData,setData] = useState({
    name:"",
    image: white1,
    result:"",
    quantity:"",
    number:"",
  });


  const navigate = useNavigate();

  const handleChange =(e)=>{
    setData(prev=>({...prev,[e.target.name]:e.target.value}))
  
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData);
      axios.post('https://fashion-server-mu.vercel.app/product',formData)
      .then(res=>
        {
          console.log(res);
          alert("Data Insertd  Successfully")
          // navigate('/home')
        })
      .catch(err => console.log(err))

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
    const calculatedResult = value * 30;
    setresult(calculatedResult);
    setData((prev) => ({ ...prev, result: calculatedResult }));
   }
    return (
      <div>
        <Navbars />
      
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


    <div className="price">
          
    <form onSubmit={handleSubmit}>
    
    <input type="hidden" name="result" value={result} />
    <div className="result">
        <span>{result} LE</span>
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
</form>

          </div>
        </div>
  
      </div>
      <FooterTs/>
      </div>
    );
  }

export default Tshirt3;



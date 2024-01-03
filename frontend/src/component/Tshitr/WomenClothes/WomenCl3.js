import React,{useEffect, useState} from 'react'
import Img1 from '../../image/imageHome/imageWomen3/1.png'
import Img2 from '../../image/imageHome/imageWomen3/2.png';
import Img3 from '../../image/imageHome/imageWomen3/3.png';
import Img4 from '../../image/imageHome/imageWomen3/4.png';
// import Navbars from '../Navbars';
import FooterTs from '../FooterTs';
// import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Tshirt.css'

let white1 = "WomenClothes3";
function Tshirt() {

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
    const calculatedResult = value * 130;
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
        

        Green tweed dress with chic belt: a versatile blend of
         timeless elegance and modern style. The textured tweed
          fabric in refreshing green is complemented by a stylish 
          belt, accentuating the waist and adding a contemporary touch.
           Suitable for various occasions, this dress effortlessly
            combines classic sophistication with personalized flair.


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
     
     < FooterTs/>


      </div>
    );
  }

export default Tshirt;




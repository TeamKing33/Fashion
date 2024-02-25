import React,{useEffect, useState} from 'react'
import Img1 from '../../image/imageHome/imageWomen2/1.png'
import Img2 from '../../image/imageHome/imageWomen2/2.png';
import Img3 from '../../image/imageHome/imageWomen2/3.png';
import Img4 from '../../image/imageHome/imageWomen2/4.png';
// import Navbars from '../Navbars';
import FooterTs from '../FooterTs';
// import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Tshirt.css'


function Tshirt() {

  useEffect(() => {
    $('#number').mask('000 0000 0000');
  }, []);
  const [formData,setData] = useState({
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
    const calculatedResult = value * 145;
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
        The brown-red dress is a standout piece, combining chic style 
with sophistication. The flared skirt and waist belt not only 
enhance its sleek look but also add a touch of modern elegance.
 With its rich color and versatile design, this dress is perfect for a variety 
of occasions, promising a fashionable and polished appearance.
          
    <form onSubmit={handleSubmit}>
    <h3 className='textSize'>Size</h3>
    <div className="box_size">
          <div className={`size ${formData.size === "38" ? 'selected' : ''}`}
               name="size"
              onClick={() => handleSizeChange("38")}>
            38
          </div>
          <div className={`size ${formData.size === "40"? 'selected' : ''}`}
           name="size"
           onClick={() => handleSizeChange("40")}>
            40
          </div>
          <div className={`size ${formData.size === "42" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("42")}>
            42
          </div>
          <div className={`size ${formData.size === "44" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("44")}>
            44
          </div>
          <div className={`size ${formData.size === "46" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("46")}>
            46
          </div>
          <div className={`size ${formData.size === "48" ? 'selected' : ''}`}
           name="size" 
           onClick={() => handleSizeChange("48")}>
            48
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
     
     < FooterTs/>


      </div>
    );
  }

export default Tshirt;




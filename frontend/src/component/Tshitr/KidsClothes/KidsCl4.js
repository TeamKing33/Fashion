import React,{useEffect, useState} from 'react'
import Img1 from '../../image/imageHome/imagekids4/1.png'
import Img2 from '../../image/imageHome/imagekids4/2.png';
import Img3 from '../../image/imageHome/imagekids4/3.png';
import Img4 from '../../image/imageHome/imagekids4/4.png';
// import Navbars from '../Navbars';
import FooterTs from '../FooterTs';
// import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Tshirt.css'

let white1 = "KidsClothes4";
function KidsCl4() {

  useEffect(() => {
    $('#number').mask('000 0000 0000');
  }, []);

  const [formData,setData] = useState({
    name:"",
    image: white1,
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
    const calculatedResult = value * 55;
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
        
The "Dark Blue/Dinosaurs Hoodie" is a stylish and versatile casual garment that combines the classic appeal of dark blue with a playful dinosaur-themed design. Dark blue, known for its sophistication and versatility, serves as a neutral base, providing a timeless and elegant look. The addition of dinosaur graphics or patterns adds a touch of playfulness and nostalgia, allowing wearers to express their personality and interests. This hoodie not only offers warmth and comfort but also serves as a fashion statement, making it a unique and eye-catching piece for those seeking a blend of classic and whimsical style.
          
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

export default KidsCl4;




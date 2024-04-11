import React,{useState,useEffect} from 'react'
import axios from 'axios'
import style from '../cssCompany/addproducts.module.css'
// ...
function Addproducts() {
  useEffect(()=>{
    $('#price').mask('0000');
  }, []);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: ''
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleUpload = (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('image', file);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);

    axios.post('http://localhost:8083/upload', formDataToSend)
      .then(res => {
        console.log(res.data);
        // Reset form data after successful upload if needed
        setFormData({
          title: '',
          price: '',
          description: ''
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleUpload} className={style.addproducts}>
        <div className={style.cardproduct}>
          <div className={style.image2} style={{ color: "#fff", width: "90", height: "100px" }}>
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className={style.allinput}>
            <input
              type="text"
              name='title'
              placeholder='title'
              value={formData.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name='price'
              id='price'
              placeholder='price'
              value={formData.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name='description'
              placeholder='description'
              value={formData.description}
              onChange={handleInputChange}
            />
            <button type='submit'>Add Product</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Addproducts

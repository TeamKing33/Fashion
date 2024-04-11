import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../cssCompany/addproducts.module.css'

function ProductsCompany() {
    

  const [images, setImages] = useState([]);

  // Fetch images from server when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Function to fetch images from the server
  const fetchImages = () => {
    axios.get('https://fashion-server-mu.vercel.app/image')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };
  return (
    <div>
          <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
    {images.map(image => (
       < div className="col-6 col-md-6 col-lg-3 mx-0 mb-4" >
        <div className="card p-0 overflow-hidden shadow cards">
          <img
            key={image.id}
            src={`https://fashion-server-mu.vercel.app/${image.path}`} 
            alt={`Image ${image.id}`}
            className="card-img-top imagecard"
          />
           <div className="card-body">
                <div className="alltitle">
                <h5 className="card-title title" >{image.title}</h5>
                </div>
                <div className="flex">
                <p className="card-textt">EGP{image.price}</p>
                </div>
                <div className="alltext">
                <span className="card-text description">{image.description}</span>
                </div>
              </div>
           </div>
         </div>
        ))}
         </div>
        </section>
      </div>
      </div>
    </div>
  )
}

export default ProductsCompany

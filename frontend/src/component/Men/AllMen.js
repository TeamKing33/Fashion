import React, { useState } from 'react';
import data from './DataMen';
import Men from './Men';
import "../css/AllCards.css";
import "../css/Cards.css"


const AllCard = ({handleClick}) => {


  return (
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {data && data.map((item) => (
  <div className="col-6 col-md-6 col-lg-3 mx-0 mb-4" key={item.id}>
    <div className="card p-0 overflow-hidden shadow cards">
      <Men item={item} key={item.id} handleClick={handleClick} />
   

    </div>
  </div>
))}

          </div>
        </section>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default AllCard;

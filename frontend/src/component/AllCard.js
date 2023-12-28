import React, { useState } from 'react';
import data from './Data';
import Cards from './Cards';
import styleallc from "./css/AllCards.module.css";
import "./css/Cards.css"
import CartItem from './CartItem';

const AllCard = ({handleClick}) => {


  return (
    <div className={styleallc.bodycar}>
      <div className={styleallc.cards}>
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {data && data.map((item) => (
  <div className="col-6 col-md-6 col-lg-3 mx-0 mb-4" key={item.id}>
    <div className="card p-0 overflow-hidden shadow cards">
      <Cards item={item} key={item.id} handleClick={handleClick} />
   

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

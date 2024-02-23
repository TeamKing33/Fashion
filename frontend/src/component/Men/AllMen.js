import React, { useState } from 'react';
import data from './DataMen';
import Men from './Men';
import { useTranslation } from 'react-i18next';
import "../css/AllCards.css";
import "../css/Cards.css"


const AllMen = ({handleClick}) => {
  const { t, i18n } = useTranslation();
  const dataCardMen = data(t);


  return (
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {dataCardMen && dataCardMen.map((item) => (
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

export default AllMen;

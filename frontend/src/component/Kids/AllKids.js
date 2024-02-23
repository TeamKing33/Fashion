import React, { useState } from 'react';
import data from './DataKids';
import Women from './Kids'
import { useTranslation } from 'react-i18next';
import "../css/AllCards.css";
import ".././css/Cards.css"


const AllKids = ({handleClick}) => {

  const { t, i18n } = useTranslation();
  const dataKids = data(t);

  return (
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {dataKids && dataKids.map((item) => (
  <div className="col-6 col-md-6 col-lg-3 mx-0 mb-4" key={item.id}>
    <div className="card p-0 overflow-hidden shadow cards">
      <Women item={item} key={item.id} handleClick={handleClick} />
   

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

export default AllKids;

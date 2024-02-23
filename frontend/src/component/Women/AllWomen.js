import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import data from './DataWomen';
import Women from './Women'
import { useTranslation } from 'react-i18next';
import "../css/AllCards.css";
import "../css/Cards.css"


const AllWomen = ({handleClick}) => {

  const { t, i18n } = useTranslation();
  const dataCardWomen = data(t);

  const navigate = useNavigate()

useEffect(() => {
  
  const login = Cookies.get('login');
  if (login !== 'true') {
    
    navigate('/signin');
  }
}, [navigate]);

  return (
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {dataCardWomen && dataCardWomen.map((item) => (
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

export default AllWomen;

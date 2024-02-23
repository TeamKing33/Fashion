import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import data from './Data';
import Cards from './Cards';
import "./css/AllCards.css";
import "./css/Cards.css"
import CartItem from './CartItem';
import { useTranslation } from 'react-i18next';

const AllCard = ({handleClick}) => {
  
const navigate = useNavigate()

useEffect(() => {
  
  const login = Cookies.get('login');
  if (login !== 'true') {
    
    navigate('/signin');
  }
}, [navigate]);

  const { t, i18n } = useTranslation();
  const dataCard = data(t);

  return (
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container ">
          <div className="row justify-content-center">
          {dataCard && dataCard.map((item) => (
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

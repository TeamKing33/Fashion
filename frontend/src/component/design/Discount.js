import React from 'react'
import { useTranslation } from 'react-i18next';
import "./cssDesign/discount.css"
import { NavLink } from 'react-router-dom'

function Discount() {
  const { t, i18n } = useTranslation();

  return (
    <div className="Discountca">
      <div className="discountForm" >
 
 <span className="DiscountHeading">{t("TAKE 10% OFF")}</span>
 <p className="DiscountSubheading">{t("Welcome Fashion")}</p>
 <div className="inputContainer">
  <NavLink to="/product"> <button type="submit" class="submitButton">{t("Get it!")}</button></NavLink>
 </div>
    
</div>

    </div>
  )
}

export default Discount

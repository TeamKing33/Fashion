import React from 'react'
import "./cssDesign/discount.css"
import { NavLink } from 'react-router-dom'

function Discount() {
  return (
    <div className="Discountca">
      <div className="discountForm" >
 
 <span className="DiscountHeading">TAKE 10% OFF.</span>
 <p className="DiscountSubheading">Welcome! Enjoy 10% Off Your First Order at Fashion Wave.</p>
 <div className="inputContainer">
  <NavLink to="/product"> <button type="submit" class="submitButton">Get it!</button></NavLink>
 </div>
    
</div>

    </div>
  )
}

export default Discount

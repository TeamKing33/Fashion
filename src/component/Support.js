import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import Navbars from './Navbars';
// import Footer from './footer';
import stylessu from"./css/support.module.css"
function Support() {
  return (
    <div className={stylessu.bodyback}>
        {/* <Navbars/> */}
    <Accordion style={{marginTop:50 , marginBottom:120}}>
    <Accordion.Item eventKey="0" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header className="btnsu">What is Fashion wave ?</Accordion.Header>
      <Accordion.Body>
       "Fashion Wave" is a specialized brand in selling T-shirts, known for offering a diverse range of contemporary clothing with a unique character and high quality. The brand focuses on innovative designs and staying abreast of the latest fashion trends to meet the needs of various tastes.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>How can I contact?</Accordion.Header>
      <Accordion.Body>
      You can contact through Instagram, Facebook, WhatsApp.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>Are there offers?</Accordion.Header>
      <Accordion.Body>
      Yes, indeed. There are many offers and a discount upon registration.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>How can I make the payment?</Accordion.Header>
      <Accordion.Body>
      You can make the payment using a credit card or upon receipt.
      </Accordion.Body>
    </Accordion.Item>
    
  </Accordion>
  {/* <Footer/> */}
  </div>
  )
}

export default Support

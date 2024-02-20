import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import Navbars from './Navbars';
// import Footer from './footer';
import { useTranslation } from 'react-i18next';
import stylessu from"./css/support.module.css"
function Support() {
  const { t, i18n } = useTranslation();
  return (
    <div className={stylessu.bodyback}>
        {/* <Navbars/> */}
    <Accordion style={{marginTop:50 , marginBottom:120}}>
    <Accordion.Item eventKey="0" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header className="btnsu">{t("What is Fashion wave ?")}</Accordion.Header>
      <Accordion.Body>
       {t("Fashion Wave is a specialized")}
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>{t("How can I contact?")}</Accordion.Header>
      <Accordion.Body>
      {t("contact")}
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>{t("Are there offers?")}</Accordion.Header>
      <Accordion.Body>
        {t("discount upon registration")}
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" style={{padding:20 , marginBottom:50}} className="accordion">
      <Accordion.Header>{t("How can I make the payment?")}</Accordion.Header>
      <Accordion.Body>
        {t("You can make the payment")}
      </Accordion.Body>
    </Accordion.Item>
    
  </Accordion>
  {/* <Footer/> */}
  </div>
  )
}

export default Support

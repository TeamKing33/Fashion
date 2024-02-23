import React from 'react'
import { useTranslation } from 'react-i18next';
import "./cssDesign/discountCard.css"
function DicountCard() {
  const { t, i18n } = useTranslation();

  return (
    
        <div className="ribbon">
       <span>{t("29% OFF")}</span>
      </div>
  
  )
}

export default DicountCard

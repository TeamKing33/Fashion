import { useTranslation } from 'react-i18next';

const translateData = (t) => {
  // const { t, i18n } = useTranslation();

  return [
    {
      cardHover: t('Fashion wave Classic!'),
      cardfigure: t('Classic'),
      cardocupation:t("WE OFFER THE TIMELESS T-SHIRT"),
    },
    {
      cardHover: t('Fashion wave Polo!'),
      cardfigure: t('Polo'),
      cardocupation: t(
        'A POLO NECK T-SHIRT'
      ),
    },
    {
      cardHover: t('Fashion wave Classic V Neck'),
      cardfigure: t('Classic V Neck'),
      cardocupation: t(
        'THE CLASSIC V'
      ),
    },
    {
      cardHover: t('Fashion wave Crew neck!'),
      cardfigure: t('Crew neck'),
      cardocupation: t(
        "THE CREW NECK"
      ),
    },
  ];
};

export default translateData;

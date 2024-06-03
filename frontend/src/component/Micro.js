import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import stylemic from './css/micro.module.css';

function HelloTest() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [isRecognizing, setIsRecognizing] = useState();

  useEffect(() => {
    if (!recognition) {
      const newRecognition = new window.webkitSpeechRecognition();
      newRecognition.interimResults = false;
      newRecognition.maxAlternatives = 1;

      setRecognition(newRecognition);
    }
  }, [recognition]);

  useEffect(() => {
    if (recognition) {
      recognition.lang = i18n.language || "en-US";
    }
  }, [i18n.language, recognition]);

  const list = [
    '/T-shirt',
    '/T-shirt2',
    '/T-shirt3',
    '/T-shirt4'
  ];

  const handleStart = () => {
    const greetingUtterance = new SpeechSynthesisUtterance(t("hello sir"));
    const helpUtterance = new SpeechSynthesisUtterance(t("how can I help you"));
    greetingUtterance.lang = i18n.language || "en-US";
    helpUtterance.lang = i18n.language || "en-US";
    greetingUtterance.onend = () => {
      helpUtterance.onend = () => {
        if (!recognition.isRecording) {
          recognition.start();
          setIsRecognizing(true);
        }
      };
  
      window.speechSynthesis.speak(helpUtterance);
    };
  
    window.speechSynthesis.speak(greetingUtterance);
  };

  const handleResult = (event) => {
    
    const newTranscript = event.results[0][0].transcript.toLowerCase();
    setTranscript(newTranscript);

    if (newTranscript.includes(t("hello")) || newTranscript.includes(t("welcome"))) {
      speak(t("hello sir"));
      speak(t("how can I help you"));
    } else if (newTranscript.includes(t("open product")) || newTranscript.includes("product") || newTranscript.includes("the product")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/product");
    } else if (newTranscript.includes(t("open support")) || newTranscript.includes("support")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/support");
    } else if (newTranscript.includes(t("home")) || newTranscript.includes("open home")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/home");
    } else if (newTranscript.includes("open logout") || newTranscript.includes("log out")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/signin");
    } else if (newTranscript.includes(t("open women")) || newTranscript.includes("women") || newTranscript.includes("women clothes") || newTranscript.includes("product women")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/productWomen");
    } else if (newTranscript.includes(t("open man")) || newTranscript.includes("man") || newTranscript.includes("man clothes") || newTranscript.includes("product man")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/productMen");
    } else if (newTranscript.includes(t("open kids")) || newTranscript.includes("kids") || newTranscript.includes("kids clothes") || newTranscript.includes("product kids")) {
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/productKids");
    } else if (newTranscript.includes(t("wave man"))) {
    } else if (newTranscript.includes(t("download app")) || newTranscript.includes(t("download application"))){
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/download");
    } else if (newTranscript.includes(t("wave man"))) {
      speak("ok sir");
      setIsRecognizing(false);
      const randomIndex = Math.floor(Math.random() * list.length);
      const randomProduct = list[randomIndex];
      navigate(randomProduct);
    }else if (newTranscript.includes(t("360"))){
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/360");
    }else if (newTranscript.includes(t("VR"))){
      speak(t("ok sir"));
      setIsRecognizing(false);
      navigate("/VR");
    } else {
      speak(t("sorry, I don't understand"));
      setTimeout(() => {
        recognition.start();
      }, 3000);
    }
  };

  const handleError = (error) => {
    console.error(error);
    setIsRecognizing(false);
  };

  useEffect(() => {
    if (recognition) {
      recognition.onresult = handleResult;
      recognition.onerror = handleError;
    }
  }, [recognition]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.lang = i18n.language || "en-US";
      window.speechSynthesis.speak(newUtterance);
    }
  };

  return (
    <div>
      <button
        onClick={handleStart}
        className={`${stylemic.btn} ${isRecognizing ? stylemic.recognizing : ""}`}
        disabled={isRecognizing}
      >
        <i className="fa-solid fa-microphone"></i>
      </button>
      {transcript && <p>Transcript: {transcript}</p>}
    </div>
  );
}

export default HelloTest;

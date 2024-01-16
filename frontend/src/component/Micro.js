import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import stylemic from './css/micro.module.css';

function HelloTest() {
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [isRecognizing, setIsRecognizing] = useState();

  useEffect(() => {
    if (!recognition) {
      const newRecognition = new window.webkitSpeechRecognition();

      newRecognition.lang = "en-US" ;
      newRecognition.interimResults = false;
      newRecognition.maxAlternatives = 1;

      setRecognition(newRecognition);
    }
  }, [recognition]);

  const list = [
    '/T-shirt',
    '/T-shirt2',
    '/T-shirt3',
    '/T-shirt4'
  ];

  const handleStart = () => {
    if (!recognition.isRecording) {
      recognition.start();
      setIsRecognizing(true);
    }
  };

  const handleResult = (event) => {
    const newTranscript = event.results[0][0].transcript.toLowerCase();
    setTranscript(newTranscript);

    if (newTranscript.includes("hello") || newTranscript.includes("welcome")) {
      speak("hello sir");
      speak("how can I help you");

     

    } else if (newTranscript.includes("open product")||newTranscript.includes("product")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/product");
    }else if (newTranscript.includes("open support")||newTranscript.includes("support")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/support");
    }else if (newTranscript.includes("open home")||newTranscript.includes("home")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/home");
    }else if (newTranscript.includes("open logout")||newTranscript.includes("log out")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/signin");
    }
    else if (newTranscript.includes("open women")||newTranscript.includes("women") ||newTranscript.includes("women clothes")||newTranscript.includes("product women")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/productWomen");
    }
     else if (newTranscript.includes("open man")||newTranscript.includes("man")||newTranscript.includes("man clothes")||newTranscript.includes("product man")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/productMen");
    }
    else if (newTranscript.includes("open kids")||newTranscript.includes("kids")||newTranscript.includes("kids clothes")||newTranscript.includes("product kids")) {
      speak("ok sir");
      setIsRecognizing(false);
      navigate("/productKids");
    }
    else if (newTranscript.includes("f w m")) {
      speak("ok sir");
      setIsRecognizing(false);
      const randomIndex = Math.floor(Math.random() * list.length);
      const randomProduct = list[randomIndex];
      
      navigate(randomProduct);
    }
     else {
      speak("sorry, I don't understand");
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
      newUtterance.lang = "en-US";
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
        <i class="fa-solid fa-microphone"></i>
      </button>
      {transcript && <p>Transcript: {transcript}</p>}
    </div>
  );
}

export default HelloTest;



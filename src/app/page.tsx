"use client";

import React, { useState, useEffect } from 'react';
import StartButton from './components/Buttons/StartButton/startbutton';
import CountButton from './components/Buttons/CountButton/countbutton';
import CountDown from './components/CountDown/countdown';
import SaveScore from './components/SaveScore/savescore';

const Home: React.FC = () => {
  const [seconds, setSeconds] = useState(10);
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isCounting && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds <= 0 && isCounting) {
      setIsCounting(false);
      setSeconds(0);
    }

    return () => clearInterval(timer);
  }, [isCounting, seconds]);

  const startGame = () => {
    setIsCounting(true);
    setCount(0);
    setSeconds(10);
  };

  const handleCount = () => {
    if (isCounting && seconds > 0) {
      setCount((prev) => prev + 1);
    }
  };

  const saveScore = () => {
    setScores((prev) => [...prev, count]);
  };

  const playAgain = () => {
    setIsCounting(false);
    setCount(0);
    setSeconds(10);
  };

  return (
    <div className="container-xl flex flex-col items-center space-y-4">
      
      <CountDown secondToDisplay={seconds} data-testid="countdown" />

      {!isCounting && seconds === 10 && (
        <StartButton startFunction={startGame} />
      )}

      {isCounting && seconds > 0 && (
        <div className="flex items-center space-x-4">
        
          <CountButton countFunction={handleCount} />

          <div
            data-testid="clickCounter"
            className="p-4 text-xl font-bold bg-gray-100 border rounded-md"
          >
            Clicks: {count}
          </div>
        </div>
      )}

      {seconds === 0 && (
        <>
          <SaveScore count={count} scores={scores} addScore={saveScore} />
          <button
            data-testid="playAgainBtn"
            onClick={playAgain}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default Home;



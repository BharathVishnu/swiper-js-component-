import React, { useState, useEffect } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timerInterval;

    timerInterval = setInterval(() => {
      if (seconds < 10) {
        setSeconds(seconds + 1);
      } else {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [minutes, seconds]);

  return (
    <div className="text-2xl text-black bg-white rounded rounded-4 mt-3 md:p-1 mx-auto">
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;

const { useState, useEffect } = require('react');

export const useStopwatch = (initVal) => {
  const [time, setTime] = useState(initVal);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 1000);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [startTimer]);
  return { time, setStartTimer, setTime };
};

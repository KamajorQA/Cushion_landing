import { useEffect, useState } from 'react';

import './style.css';

export const useCountdownTimer = (date) => {
  const [seconds, setTimer] = useState(date - Date.now());
  useEffect(() => {
    const timeout = setTimeout(() => setTimer(seconds - 1), 1000);
    if (seconds <= 0) clearTimeout(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [seconds]);

  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');

  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');

  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  return {
    seconds,
    time: `${h}:${m}:${s}`,
  };
};

function Countdown() {
  const date = Date.now() + 17476; // 4 hours 51 minutes & 16 seconds from now for demo
  const { seconds, time } = useCountdownTimer(date); // date must be in seconds

  return (
    <div className="countdown-container">
      <div className="countdown-offer">LIMITED OFFER</div>
      <div className="countdown-timer">
        {!!seconds && <span>{time}</span>}
        {seconds <= 0 && <span>Offer is over!</span>}
      </div>
    </div>
  );
}

export { Countdown };

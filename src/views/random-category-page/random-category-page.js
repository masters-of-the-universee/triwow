import './random-category-page.scss';
import React, { useEffect, useState } from 'react';
import circlePng from '../../assets/circle.svg';

export default function RandomCategoryPage() {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [countdownStarted, setCountdownStarted] = useState(true);
  const [countdown, setCountdown] = useState(3);

  function getRandomDegree() {
    const degree = parseInt(Math.random() * (1900 - 600) + 600);
    const winner = degree % 360;
    const winIndex = Math.ceil(winner / 60);
    console.log(degree, winIndex); // for debug
    return { degree, winIndex };
  }

  useEffect(() => {
    setCountdownStarted(true);
  }, []);

  useEffect(() => {
    if (countdownStarted === false) {
      const deg = getRandomDegree();
      setRotateDeg(deg.degree);
    }
  }, [countdownStarted]);

  useEffect(() => {
    setTimeout(() => {
      if (countdown <= 1) {
        return setCountdownStarted(false);
      }
      setCountdown(countdown - 1);
    }, 1000);
  }, [countdown]);

  const transformRotateStyle = rotateDeg
    ? {
        transform: `rotate(-${rotateDeg}deg)`,
      }
    : null;

  return (
    <div>
      {countdownStarted ? (
        <div className="countdown">
          <div className="countdown-container">{countdown}</div>
        </div>
      ) : (
        <img id="circle" style={transformRotateStyle} src={circlePng} alt="circle" />
      )}
    </div>
  );
}

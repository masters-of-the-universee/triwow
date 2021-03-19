import React, { useEffect, useState } from 'react';
import './random-category-page.scss';
import circlePng from '../../assets/circle2.svg';

export default function RandomCategoryPage() {
  const [rotateDeg, setRotateDeg] = useState(null);

  function getRandomDegree() {
    const degree = parseInt(Math.random() * (1900 - 600) + 600);
    const winner = degree % 360;
    const winIndex = Math.ceil(winner / 60);
    console.log(degree);
    console.log(winner);
    console.log(winIndex);
    setRotateDeg(degree);
  }

  useEffect(() => {
    getRandomDegree();
  }, []);
  return (
    <div>
      <h2>RandomCategoryPage</h2>
      <img
        id="circle"
        style={rotateDeg ? { transform: `rotate(-${rotateDeg}deg)` } : null}
        src={circlePng}
        alt="circle"
      />
      <input type="text" />
    </div>
  );
}

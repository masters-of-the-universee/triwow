import './random-category-page.scss';
import React, { useEffect, useState } from 'react';
import circlePng from '../../assets/circle.svg';

export default function RandomCategoryPage() {
  const [rotateDeg, setRotateDeg] = useState(0);

  function getRandomDegree() {
    const degree = parseInt(Math.random() * (1900 - 600) + 600);
    const winner = degree % 360;
    const winIndex = Math.ceil(winner / 60);
    return { degree, winIndex };
  }

  useEffect(() => {
    const deg = getRandomDegree();
    setRotateDeg(deg.degree);
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

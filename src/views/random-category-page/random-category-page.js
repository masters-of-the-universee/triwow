import './random-category-page.scss';
import React, { useEffect, useState } from 'react';
import circlePng from '../../assets/circle.svg';

export default function RandomCategoryPage() {
  const [rotateDeg, setRotateDeg] = useState(undefined);

  function getRandomDegree() {
    const degree = parseInt(Math.random() * (1900 - 600) + 600);
    const winner = degree % 360;
    const winIndex = Math.ceil(winner / 60);
    return { degree, winIndex };
  }

  useEffect(() => {
    setTimeout(() => {
      const degree = getRandomDegree();
      setRotateDeg(degree.degree);
      console.log(degree);
    }, 200);
  }, []);

  const transformRotateStyle = {
    transform: `rotate(-${rotateDeg}deg)`,
  };
  return (
    <section class="category">
      <div className="rotate" style={transformRotateStyle}>
        <img id="circle" src={circlePng} alt="circle" />
      </div>
    </section>
  );
}

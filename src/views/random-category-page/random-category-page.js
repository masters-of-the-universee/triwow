import './random-category-page.scss';
import React, { useEffect, useState, useRef } from 'react';
import circlePng from '../../assets/circle.png';
import downArrowSvg from '../../assets/down-arrow.svg';
import '@lottiefiles/lottie-player';
import { useHistory } from 'react-router-dom';

export default function RandomCategoryPage() {
  const [rotateDeg, setRotateDeg] = useState(undefined);
  const [randomWinner, setRandomWinner] = useState(undefined);
  const lootiePlayerEl = useRef(null);

  function getRandomDegree() {
    const degree = parseInt(Math.random() * (1900 - 600) + 600);
    const winner = degree % 360;
    const winIndex = Math.floor(winner / 60);
    return { degree, winIndex };
  }

  useEffect(() => {
    setTimeout(() => {
      const degree = getRandomDegree();
      setRotateDeg(degree.degree);
      setTimeout(() => {
        setRandomWinner(degree.winIndex);
        lootiePlayerEl.current.play();
      }, 4000);
    }, 200);
  }, []);

  const history = useHistory();
  useEffect(() => {
    const questionCategoryList = {
      GENERAL_KNOWLEDGE: 9,
      SPORTS: 21,
      GEOGRAPHY: 22,
      HISTORY: 23,
      ARTS: 25,
      SCIENCE: 17
    };
    const { ARTS, GENERAL_KNOWLEDGE, GEOGRAPHY, HISTORY, SCIENCE, SPORTS } = questionCategoryList;
    const winnerRouterPushing = {
      0: SPORTS,
      1: ARTS,
      2: GENERAL_KNOWLEDGE,
      3: GEOGRAPHY,
      4: HISTORY,
      5: SCIENCE
    };
    if (randomWinner) {
      setTimeout(() => {
        history.push(`/questions/${winnerRouterPushing[randomWinner]}`);
      }, 1200);
    }
  }, [randomWinner]);

  const categories = ['Geography 🌎', 'Sports 🏈', 'History ⚔', 'General Knowledge 📚', 'Science ⚛', 'Art 🎨'];

  const transformRotateStyle = {
    transform: `rotate(-${rotateDeg}deg)`
  };
  return (
    <section className="category">
      <div className="random">
        <div className="random__down">
          <img src={downArrowSvg} alt="" />
        </div>
        <div className="random__rotate" style={transformRotateStyle}>
          <img id="circle" src={circlePng} alt="circle" />
        </div>
        {randomWinner ? (
          <div className="random__winner">
            <h4>
              <span>{categories[randomWinner]}</span>
            </h4>
          </div>
        ) : null}
      </div>
      <lottie-player
        ref={lootiePlayerEl}
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_pkanqwys.json"
      ></lottie-player>
    </section>
  );
}

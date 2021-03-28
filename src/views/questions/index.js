import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../../components/question/question';
import Checkbox from '../../components/checkbox/index';
import Loader from '../../components/loader/index';
import './index.scss';

const QuestionsPage = function ({ match, ...props }) {
  const [questions, setQuestions] = useState([]);
  const [questionOrder, setQuestionOrder] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isGameDone, setGameDone] = useState(false);

  const [countdown, setCountdown] = useState(15);
  
  useEffect(() => {
    if (countdown > 0) return setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  async function getQuestions(category) {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}`);
    const data = await response.json();
    console.log(data);
    setQuestions(data.results);
  }

  const { categoryId } = useParams();

  useEffect(() => {
    getQuestions(categoryId);
  }, []);

  function handleAnswersStat(data) {
    console.log('handled some function', data);
    setAnswers([...answers, data.answer]);
    setQuestionOrder(questionOrder + 1);
  }

  useEffect(() => {
    
  }, [answers, countdown])

  return (
    <div>
      <div className="answers">
        {answers ? answers.map((ans, i) => <Checkbox key={i} isTrue={ans} color="#000" />) : null}
      </div>
      {questions[questionOrder] !== undefined ? (
        <Question
          handleAnswersStat={handleAnswersStat}
          question={questions[questionOrder]}
          countdown={countdown}
        ></Question>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;

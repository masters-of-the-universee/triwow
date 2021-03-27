import React, { useEffect, useState } from 'react';
import Question from '../../components/question/question';

const QuestionsPage = function () {
  const [questions, setQuestions] = useState([]);
  const [questionOrder, setQuestionOrder] = useState(1);
  const [answers, setAnswers] = useState([]);

  async function getQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=5');
    const data = await response.json();
    setQuestions(data.results);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  function handleAnswersStat(data) {
    console.log('handled some function', data);
    setAnswers([...answers, data.answer]);
    setQuestionOrder(questionOrder + 1);
  }

  return (
    <div>
      <p>Answers:{answers.toString()}</p>
      <h1>Questions page</h1>
      {questions[questionOrder] !== undefined ? (
        <Question
          handleAnswersStat={handleAnswersStat}
          question={questions[questionOrder]}
        ></Question>
      ) : null}
    </div>
  );
};

export default QuestionsPage;

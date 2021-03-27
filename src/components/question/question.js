import React, { useEffect, useState } from 'react';
import './question.scss';
import ReactHtmlParser from 'react-html-parser';

const Question = ({ question, handleAnswersStat }) => {
  const types = {
    MULTIPLE: 'multiple',
    BOOLEAN: 'boolean'
  };
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  function shuffle(array) {
    let shuffledArray = array;
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  useEffect(() => {
    question.type === types.MULTIPLE
      ? setAnswers(shuffle([question.correct_answer, ...question.incorrect_answers]))
      : console.log('boolean');
  }, []);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    if (selectedAnswer === question.correct_answer) {
      handleAnswersStat({ answer: true });
      return console.log('doğruu');
    }
    console.log('yanlış');
    handleAnswersStat({ answer: false });
  }, [selectedAnswer]);

  return (
    <div className="question-card">
      <p>{ReactHtmlParser(question.question)}</p>
      <div className="question-card-answers">
        {question.type === types.BOOLEAN ? (
          <ul>
            <li>
              <button>{question.correct_answer}</button>
            </li>
            <li>
              <button>{question.incorrect_answers[0]}</button>
            </li>
          </ul>
        ) : (
          <ul>
            {answers.map((a, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setSelectedAnswer(a);
                  }}
                >
                  {a}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Question;

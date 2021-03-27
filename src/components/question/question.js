import React, { useEffect, useState } from 'react';
import './question.scss';
import ReactHtmlParser from 'react-html-parser';

function shuffle(array) {
  let shuffledArray = array;
  shuffledArray.sort(() => Math.random() - 0.5);
  return shuffledArray;
}
const types = {
  MULTIPLE: 'multiple',
  BOOLEAN: 'boolean'
};

const Question = ({ question, handleAnswersStat }) => {
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  useEffect(() => {
    setAnswers(shuffle([question.correct_answer, ...question.incorrect_answers]));
  }, [question]);

  useEffect(() => {
    setAnswers(shuffle([question.correct_answer, ...question.incorrect_answers]));
    if (selectedAnswer) {
      if (selectedAnswer === question.correct_answer) {
        handleAnswersStat({ answer: true });
        return;
      }
      handleAnswersStat({ answer: false });
    }
  }, [selectedAnswer]);

  if (question)
    return (
      <div className="question-card">
        <p>{ReactHtmlParser(question.question)}</p>
        <div className="question-card-answers">
          {question.type === types.BOOLEAN ? (
            <ul>
              <li>
                <button onClick={() => setSelectedAnswer(true)}>True</button>
              </li>
              <li>
                <button onClick={() => setSelectedAnswer(false)}>False</button>
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
  return <div>Question undefined</div>;
};

export default Question;

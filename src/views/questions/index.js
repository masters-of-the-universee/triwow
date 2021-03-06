import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../../components/question/question';
import Checkbox from '../../components/checkbox/index';
import Loader from '../../components/loader/index';
import useCountDown from 'react-countdown-hook';
import Leaderboard from '../../components/leaderboard/leaderboard'
import Database from '../../firebase/index'
import {connect} from 'react-redux'
import './index.scss';

const initialTime = 15 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000;

const QuestionsPage = function ({ match, user, ...props }) {
  const [questions, setQuestions] = useState([]);
  const [questionOrder, setQuestionOrder] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isGameDone, setGameDone] = useState(false);

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    getQuestions(categoryId);
  }, []);

  async function getQuestions(category) {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}`);
    const data = await response.json();
    setQuestions(data.results);
  }

  const { categoryId } = useParams();

  function handleAnswersStat(data) {
    if (data.answer) {
      const currentTime = timeLeft / 1000;
      start((currentTime + 10) * 1000);
    }
    setAnswers([...answers, data.answer]);
    setQuestionOrder(questionOrder + 1);
  }

  useEffect(() => {
    if ((timeLeft / 1000) === 1) {
      return setGameDone(true);
    }
    const wrongAnswers = answers.filter(ans => !ans);
    if(wrongAnswers.length > 2) {
      return setGameDone(true);
    }
    if(answers.length > 4){
      return setGameDone(true);
    }
  }, [timeLeft, answers]);

  useEffect(() => {
    if(isGameDone === true){
      const db = new Database();
      const correctAnswers = answers.filter(ans => ans);
      const score = correctAnswers.length * 10;
      db.updateUser(user.id, score);
    }
  }, [isGameDone])

  return (
    isGameDone ? (
      <Leaderboard user={user} />
    ) : (
      <div>
        <div className="answers">
          {answers ? answers.map((ans, i) => <Checkbox key={i} isTrue={ans} color="#000" />) : null}
        </div>
        {questions[questionOrder] !== undefined ? (
          <Question
            handleAnswersStat={handleAnswersStat}
            question={questions[questionOrder]}
            countdown={timeLeft / 1000}></Question>
        ) : (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </div>
    )
  )
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(QuestionsPage);

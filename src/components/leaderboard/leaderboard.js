import React, { useEffect, useState } from 'react';
import './leaderboard.scss';
import Database from '../../firebase/index';
import Loader from '../loader/index'

const Leaderboard = ({user}) => {
  const [topTen, setTopTen] = useState(null);
  const [me, setMe] = useState(null);

  useEffect(async () => {
    const db = new Database();
    setTimeout(async () => {
      const yeyTopten = await db.getTopTen()
      setTopTen(yeyTopten);
      const myProfile = await db.getMe(user.id);
      setMe(myProfile);
    }, 600)
  }, []);
  
  
  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <div className="head">
          <h1>LEADER BOARD</h1>
        </div>
        <div className="body">
          <ul>
            <li className="header">
              <h4>Name</h4>
              <h4>Score</h4>
            </li>
            {topTen ? topTen.map((user, key) => (
              <li key={key}>
                <p>{user.username} <span className="score">#{user.id}</span></p>
                <span>{user.score}</span>
              </li>
            )): <Loader size={40} />}
          </ul>
        </div>
      </div>
      <div className="your-score">
        {me ? <>
          <h4 className="your-name">
          {me.username}<span className="your-id">#{me.id}</span>
        </h4>
        <p className="your-last-score">{me.score}</p></> : <Loader size={40} ></Loader>}
      </div>
    </div>
  );
};

export default Leaderboard;

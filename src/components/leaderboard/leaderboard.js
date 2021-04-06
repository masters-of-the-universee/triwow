import './leaderboard.scss';

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <div className="head">
          <h1>LEADER BOARD</h1>
        </div>
        <div className="body">
          <ul>
            <li>
              <mark>Onur</mark>
              <small>948</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

import "./leaderboard.scss";

const Leaderboard = () => {
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
            <li>
              <p>Onur#15235869</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
            <li>
              <p>Onur</p>
              <span>948</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="your-score">
        <h4 className="your-name">
          Your Name <span className="your-id">#123213</span>
        </h4>
        <p className="your-last-score">30</p>
      </div>
    </div>
  );
};

export default Leaderboard;

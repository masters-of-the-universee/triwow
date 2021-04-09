import './modeselectpage.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ModeSelectPage = ({ user }) => {
  return (
    <div className="mode-container">
      <div className="navbar">
        <h4>
          Welcome <span className="username">{user.username}</span>{' '}
          <span className="id">#{user.id}</span>
        </h4>
        <h2> Choose the game mode!</h2>
      </div>
      <div className="buttons">
        <a className="buttons-button disabled">
          <span>Multiplayer</span>
          <div className="tooltiptext">
            <p>Coming soon...</p>
          </div>
        </a>
        <Link className="buttons-button" to="/random-category">
          <span>Classic Mode</span>
          <div className="tooltiptext">
            <p>
              In this mode, you get a spinner wheel that brings a category from 6 different areas.
              After category selection, you will be automatically redirected a question page. These
              questions can be a multiple-choice question or true/false question.
              <br />
              You will get 5 different questions and the time for each one is 15 secs. Must choose
              wisely because you will not be able to return back and choose another answer. If you
              do not manage to choose the answer before the coundown ends, the question will be
              answered as wrong.
              <br />
              After 5 questions and answers, the page will direct you to leaderboard page. If you
              succeeded to get enough points, you can see your name on top 20.
            </p>
          </div>
        </Link>
        <a className="buttons-button disabled">
          <span>Rapid Fire Mode</span>
          <div className="tooltiptext">
            <p>Coming soon...</p>
          </div>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps)(ModeSelectPage);

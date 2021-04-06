import "./modeselectpage.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ModeSelectPage = ({ value }) => {
	return (
		<div className="container">
			<div className="navbar">
				<h2> Welcome {value} !</h2>
				<h2> Choose the game mode!</h2>
			</div>
			<div className="buttons">
				<Link className="buttons-button disabled">
					<span>Multiplayer</span>
					<div className="tooltiptext">
						<p>Coming soon...</p>
					</div>
				</Link>
				<Link className="buttons-button" to="/random-category">
					<span>Classic Mode</span>
					<div className="tooltiptext">
						<p>
							In this mode, you get a spinner wheel that brings a category from
							6 different areas. After category selection, you will be
							automatically redirected a question page. These questions can be a
							multiple-choice question or true/false question.
							<br />
							You will get 5 different questions and the time for each one is 15
							secs. Must choose wisely because you will not be able to return
							back and choose another answer. If you do not manage to choose the
							answer before the coundown ends, the question will be answered as
							wrong.
							<br />
							After 5 questions and answers, the page will direct you to
							leaderboard page. If you succeeded to get enough points, you can
							see your name on top 20.
						</p>
					</div>
				</Link>
				<Link className="buttons-button disabled">
					<span>Rapid Fire Mode</span>
					<div className="tooltiptext">
						<p>Coming soon...</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	value: state.value,
});
export default connect(mapStateToProps)(ModeSelectPage);

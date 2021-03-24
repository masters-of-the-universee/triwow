import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import circlePng from "../../assets/circle.png";
import { connect } from "react-redux";
import { addingNewUsername } from "./../../actions/index";

const LoginPage = ({ addingNewUsername }) => {
	const [newName, setNewName] = useState("");

	const onChangeHandler = (e) => {
		setNewName(e.target.value);
	};

	useEffect(() => {
		console.log(newName);
	}, [newName]);

	const onClickHandler = () => {
		if (newName === "") {
			alert("You are logging without a name.");
			addingNewUsername(newName);
		}
	};
	const onClickHandlerTwo = () => {
		addingNewUsername("");
	};

	return (
		<div className="main-wrapper">
			<div className="login-container">
				<div className="left-section">
					<img src={circlePng} alt="carkifelek" />
				</div>
				<div className="right-section">
					<h3>Write your name to start !</h3>
					<div className="input-area">
						<div className="wrapper">
							<div className="input-data">
								<form>
								<input
									onChange={onChangeHandler}
									name="name"
									type="text"
									autoComplete="off"
									required
								/>
								<label>Write your Name</label>
								</form>
							</div>
						</div>
					</div>
					<Link onClick={onClickHandler} to="/mode-selection">
						Play
					</Link>
					<Link onClick={onClickHandlerTwo} to="/mode-selection">
						Play as Anonymus
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addingNewUsername: (text) => dispatch(addingNewUsername(text)),
});

const mapStateToProps = (state) => ({
	value: state.newName,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

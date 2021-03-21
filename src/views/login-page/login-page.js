import React, { setState, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./loginpage.scss";
import circlePng from "../../assets/circle.svg";

const LoginPage = () => {
	const onChangeHandler = (e) => {
		let eray = e.target.value;
		console.log(eray);
	};

	const onClickHandler = () => {};
	return (
		<div className="login-container">
			<div className="left-section">
				<img src={circlePng} alt="carkifelek" />
			</div>
			<div className="rigth-section">
				<h3>Write your name to start !</h3>
				<div className="input-area">
					<div className="wrapper">
						<div className="input-data">
							<input
								onChange={onChangeHandler}
								name="name"
								type="text"
								autoComplete="off"
								required
							/>
							<label>Write your Name</label>
						</div>
					</div>
				</div>
				<Link onClick={onClickHandler} to="/mode-selection">
					Play
				</Link>
			</div>
		</div>
	);
};

export default withRouter(LoginPage);

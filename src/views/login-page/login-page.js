import React from "react";
import "./loginpage.scss";
import circlePng from "../../assets/circle.svg";

const LoginPage = () => {
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
							<input name="name" type="text" autoComplete="off" required />
							<label>Write your Name</label>
						</div>
					</div>
				</div>
				<button>Play !</button>
			</div>
		</div>
	);
};

export default LoginPage;

import React from "react";
import "./loginpage.scss";

const LoginPage = () => {
	return (
		<div className="login-container">
			<div className="left-section">
				<img
					src="https://png.pngtree.com/png-vector/20190828/ourmid/pngtree-colourful-wheel-of-fortune-for-lucky-contest-png-image_1714783.jpg"
					alt="carkifelek"
				/>
			</div>
			<div className="rigth-section">
				<h3>Write your name to play !</h3>
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

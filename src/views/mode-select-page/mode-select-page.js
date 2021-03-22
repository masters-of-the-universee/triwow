import React from "react";
import { connect } from "react-redux";

const ModeSelectPage = ({ value }) => {
	return (
		<div>
			<h2>Mode Select Page</h2>
			<h3>{value}</h3>
		</div>
	);
};

const mapStateToProps = (state) => ({
	value: state.value,
});
export default connect(mapStateToProps)(ModeSelectPage);

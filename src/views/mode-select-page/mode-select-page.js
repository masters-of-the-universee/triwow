import './modeselectpage.scss';
import React from 'react';
import { connect } from 'react-redux';

const ModeSelectPage = ({ value }) => {
  return (
    <div>
      <div className="navbar">
        <h2>Mode Page</h2>
      </div>
      <div className="buttons">
        <button className="button">Mod1</button>
        <button className="button">Mod2</button>
        <button className="button">Mod3</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});
export default connect(mapStateToProps)(ModeSelectPage);

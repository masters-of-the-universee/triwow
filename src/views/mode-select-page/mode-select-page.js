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
        <button className="button">Easy <span className="tooltiptext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam recusandae, ad consequatur atque earum alias cupiditate eum esse, tempora dolores molestias labore hic? Cumque.</span> </button>
        <button className="button">Medium <span className="tooltiptext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis aperiam adipisci earum ipsum quia ut ad fugit accusantium sint tempora, aspernatur necessitatibus quam ratione?</span> </button>
        <button className="button">Hard
        <span className="tooltiptext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid natus consequuntur voluptatem voluptatibus id ab blanditiis cupiditate autem, saepe quisquam accusamus necessitatibus eius consectetur!</span> </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});
export default connect(mapStateToProps)(ModeSelectPage);

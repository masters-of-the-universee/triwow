import './modeselectpage.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const ModeSelectPage = ({ value }) => {


  return (
   
    <div className="container">
      <div className="navbar">
        <h2> Welcome {value} !</h2>
        <h2> Choose the game mode!</h2>
      </div>
      <div className="buttons">
        <Link style={{ textDecoration: 'none' }} to={{pathname:"/random-category"}}>
        <button className="button">Easy <span className="tooltiptext tooltiptext-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam recusandae, ad consequatur atque earum alias cupiditate eum esse, tempora dolores molestias labore hic? Cumque.</span> </button>
          </Link>
        <Link style={{ textDecoration: 'none' }} to={{pathname:"/random-category"}}>
        <button className="button">Medium <span className="tooltiptext tooltiptext-mid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis aperiam adipisci earum ipsum quia ut ad fugit accusantium sint tempora, aspernatur necessitatibus quam ratione?</span> </button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={{pathname:"/random-category"}}>
        <button className="button">Hard
        <span className="tooltiptext tooltiptext-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid natus consequuntur voluptatem voluptatibus id ab blanditiis cupiditate autem, saepe quisquam accusamus necessitatibus eius consectetur!</span> </button>
          </Link>
      </div>
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});
export default connect(mapStateToProps)(ModeSelectPage);

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import circlePng from "../../assets/circle.png";
import { connect } from "react-redux";
import { addingNewUsername } from "./../../actions/index";
import Database from "../../firebase/index";
import qmarkPng from "../../assets/question-mark.png";
import swal from "sweetalert";
import { nanoid } from 'nanoid'

const LoginPage = ({ addingNewUsername }) => {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    setNewName(e.target.value);
  };

  useEffect(() => {
    console.log(newName);
  }, [newName]);

  const onClickHandler = async () => {
    setError("");
    const user = {
      id: nanoid(7),
      username: newName
    }
    if(newName.length < 3){
      return setError("Please insert a valid name!")
    }
    addingNewUsername(user);
    const db = new Database();
    const response = await db.addUser(user);
  };

  async function anonymousClickHandler(){
    setError("");
    const randomId = nanoid(7);
    const user = {
      id: randomId,
      username: randomId
    }
    addingNewUsername(user);
    const db = new Database();
    const response = await db.addUser(user);
  }

  return (
    <div className="main-wrapper">
      <div className="login-container">
        <div className="left-section">
          <img src={circlePng} alt="carkifelek" />
        </div>
        <div className="right-section">
          <div className="music-section">
            <button
              className="tutorial btnbtn"
              onClick={() => swal("TUTORIAL", `              Write your name, Turn the wheel, Start solving questions!`)}>
              <img className="tutorialPhoto" src={qmarkPng} alt="qmarkpng" />
            </button>
          </div>
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
              { error ? <span className="error">{error}</span> : "" }
            </div>
          </div>
          <Link onClick={onClickHandler} to="/mode-selection">
            Play
          </Link>
          <Link onClick={anonymousClickHandler} to="/mode-selection">
            Play as Anonymus
          </Link>
        </div>
      </div>
    </div >
  );
};

const mapDispatchToProps = (dispatch) => ({
  addingNewUsername: (text) => dispatch(addingNewUsername(text)),
});

const mapStateToProps = (state) => ({
  value: state.newName,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

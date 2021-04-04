import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.scss';
import circlePng from '../../assets/circle.png';
import { connect } from 'react-redux';
import { addingNewUsername } from './../../actions/index';
import Database from '../../firebase/index';
import audioPng from '../../assets/audio.png';
import audiooffPng from '../../assets/audiooff.png';
import qmarkPng from '../../assets/question-mark.png';
import sound from "../../assets/music.mp3";
import swal from 'sweetalert';


let count = 0;
let imgs = audiooffPng;

const LoginPage = ({ addingNewUsername }) => {
  const [newName, setNewName] = useState('');

  const onChangeHandler = (e) => {
    setNewName(e.target.value);
  };

  useEffect(() => {
    console.log(newName);
  }, [newName]);

  const playAudio = new Audio(sound);

  const playSound = audioFile => {
    if (count % 2 === 0) {
      audioFile.play();
      document.getElementById("imageID").src = audioPng;
    }
    if (count % 2 === 1) {
      audioFile.pause();
      audioFile.currentTime = 0;
      document.getElementById("imageID").src = audiooffPng;

    }
    count = count + 1
  }

  const onClickHandler = async () => {
    addingNewUsername(newName);
    const db = new Database();
    const response = await db.addUser({ name: newName });
    console.log(response);
  };

  return (
    <div className="main-wrapper">
      <div className="login-container">
        <div className="left-section">
          <img src={circlePng} alt="carkifelek" />
        </div>
        <div className="right-section">
          <div className="music-section">
            <button className="music-button btnbtn" onClick={() => playSound(playAudio)}>  <img className="audioPhoto" id="imageID" src={imgs} alt="audioPhoto" /></button>
            <button className="tutorial btnbtn" onClick={() => swal("TUTORIAL", "Oyun şöyle böyle oynanır")}>
              <img className="tutorialPhoto" src={qmarkPng} alt="qmarkpng" /></button>
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
            </div>
          </div>
          <Link onClick={onClickHandler} to="/mode-selection">
            Play
          </Link>
          <Link onClick={onClickHandler} to="/mode-selection">
            Play as Anonymus
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addingNewUsername: (text) => dispatch(addingNewUsername(text))
});

const mapStateToProps = (state) => ({
  value: state.newName
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

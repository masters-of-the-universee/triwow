import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import RandomCategory from './views/random-category-page/random-category-page';
import Questions from './views/questions/index';
import ModeSelectionPage from './views/mode-select-page/mode-select-page';
import LoginPage from './views/login-page/login-page';
import audioPng from './assets/audio.png';
import audiooffPng from './assets/audiooff.png';
import sound from './assets/music.mp3';
import { connect } from 'react-redux';

let count = 0;
let imgs = audiooffPng;

function App({ user }) {
  const playAudio = new Audio(sound);
  const playSound = (audioFile) => {
    if (count % 2 === 0) {
      audioFile.play();
      document.getElementById('imageID').src = audioPng;
    }
    if (count % 2 === 1) {
      audioFile.pause();
      audioFile.currentTime = 0;
      document.getElementById('imageID').src = audiooffPng;
    }
    count = count + 1;
  };

  return (
    <section>
      <Router>
        <main>
          <button className="music-button btnbtn" onClick={() => playSound(playAudio)}>
            {' '}
            <img className="audioPhoto" id="imageID" src={imgs} alt="audioPhoto" />
          </button>
          <Switch>
            {user.id ? (
              <>
                <Route path="/questions/:categoryId">
                  <Questions />
                </Route>
                <Route path="/random-category">
                  <RandomCategory />
                </Route>
                <Route path="/mode-selection">
                  <ModeSelectionPage />
                </Route>
              </>
            ) : (
              <Route path="/">
                <LoginPage />
              </Route>
            )}
          </Switch>
        </main>
      </Router>
    </section>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(App);

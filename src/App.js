import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import RandomCategory from './views/random-category-page/random-category-page';
import ModeSelectionPage from './views/mode-select-page/mode-select-page';
import LoginPage from './views/login-page/login-page';
import LeaderBoard from './views/leader-board/leaderboard';

function App() {
  return (
    <section>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mode-selection">Mode-selection</Link>
            </li>
            <li>
              <Link to="/random-category">Random category</Link>
            </li>
            <li>
              <Link to="/leader-board">Leader Board</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/leader-board">
              <LeaderBoard />
            </Route>
            <Route path="/random-category">
              <RandomCategory />
            </Route>
            <Route path="/mode-selection">
              <ModeSelectionPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </section>
  );
}

export default App;

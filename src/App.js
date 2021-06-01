import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import HeaderLogin from './components/HeaderLogin';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HeaderLogin />
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Header />
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

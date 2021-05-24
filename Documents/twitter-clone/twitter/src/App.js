import React from 'react';
import Login from './login_page/login';
import Signin from './signup/signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path='/' exact>
            <Login></Login>
          </Route>
          <Route path='/login'>
            <Signin></Signin>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

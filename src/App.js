import React from 'react';
import './App.css';
import Login from './component/login';
import Home from './component/home';
import Signup from './component/signup';
import NewForm from './component/newForm';
import FormDetailes from './component/formDetailes';
import Results from './component/results';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/newForm">
            <NewForm />
          </Route>
          <Route path="/formDetailes">
            <FormDetailes />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

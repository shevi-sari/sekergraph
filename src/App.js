import React ,{useEffect} from 'react';
import './App.css';
import Login from './component/enter/login';
import Home from './component/enter/home';
import Signup from './component/enter/signup';
import NewForm from './component/new form/newForm';
import FormDetailes from './component/old form/formDetailes';
import Results from './component/enter/results';

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

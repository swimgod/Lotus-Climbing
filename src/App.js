import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import WaiverPage from "./pages/WaiverPage";
import './App.css';
import SignUp from './components/Waiver/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/waiver" component={WaiverPage}/>
          <Route path="/signup" component={SignUp}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;

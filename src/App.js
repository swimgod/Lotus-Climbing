import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import WaiverPage from "./pages/WaiverPage";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/Waiver" component={WaiverPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;

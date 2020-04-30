import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Sponsor from './pages/Sponsor'
import Team from './pages/Team'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/sponsors" component={Sponsor} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/contact" component={Contact} />

          {/* 404 page */}
          <Route path="*" component={NotFound} /> 
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

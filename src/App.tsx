import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import Collection from './Pages/Collection/Collection'
import Video from './Pages/Video/Video'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/"><Home text="hello" /></Route>
          <Route exact path="/collection" component={Collection}></Route>
          <Route exact path="/video" component={Video}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

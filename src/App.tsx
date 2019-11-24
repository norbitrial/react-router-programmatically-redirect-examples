import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import Home from './Home';
import './App.css';

const App = () => {
  return <div className="app">
    <h1>React Router Programmatically Redirect Examples</h1>
    <h2>This solution represents different programmatically possible redirect options for React App. <span role="img" aria-label="redirect">➡️</span></h2>

    <h3>Actions for redirect <span role="img" aria-label="action">🎬</span>:</h3>
    <div className="actions">
      <button>first</button>
      <button>second</button>
      <button>third</button>
    </div>

    <h3>Redirected route <span role="img" aria-label="route">🌌</span>:</h3>
    <div className="routing">
      <HashRouter>
        <Suspense fallback={<div className="app-main-loader">loading...</div>}>
          <Switch>
            <Route exact path="/" children={Home} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  </div>
}

export default App;
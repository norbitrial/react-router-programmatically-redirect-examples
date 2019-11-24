import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { Route, Switch } from "react-router";
import Home from './Home';
import UseHistoryAction from './UseHistoryAction';
import UseHistoryResult from './UseHistoryResult';
import WithRouterAction from './WithRouterAction';
import WithRouterResult from './WithRouterResult';
import RedirectPushAction from './RedirectPushAction';
import RedirectPushResult from './RedirectPushResult';
import './App.css';

const App = () => {
  return <div className="app">
    <h1>React Router Programmatically Redirect Examples</h1>
    <h2>This solution represents different programmatically possible redirect options for React App. <span role="img" aria-label="redirect">➡️</span></h2>

    <h3>Actions for redirect <span role="img" aria-label="action">🎬</span>:</h3>
    <HashRouter>
      <div className="actions">
        <UseHistoryAction />
        <WithRouterAction />
        <RedirectPushAction />
      </div>

      <h3>Redirected route <span role="img" aria-label="route">🌌</span>:</h3>
      <div className="routing">
        <Switch>
          <Route exact path="/(|home)" children={Home} />
          <Route exact path="/usehistory" children={UseHistoryResult} />
          <Route exact path="/withrouter" children={WithRouterResult} />
          <Route exact path="/redirectpush" children={RedirectPushResult} />
          <Route children={Home} />
        </Switch>
      </div>

      <h3>Go back to home <Link to="/home">using Link</Link></h3>
    </HashRouter>
  </div>
}

export default App;
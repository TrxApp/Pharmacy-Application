import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './homePage';
import Dashboard from './screens/dashboard/dashboard';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// ReactDOM.render(<HomePage />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>,
  document.querySelector("#root")
);

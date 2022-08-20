import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router}from "react-router-dom";
import { UserContectProvider } from './contexts/userContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHouse, faList, faBarsStaggered, faEarthAmericas, faAngleDown, faAngleUp, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faHouse, faList, faBarsStaggered, faEarthAmericas, faAngleDown, faAngleUp, faUser, faRightFromBracket)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContectProvider>
      <Router>
        <App />
      </Router>
    </UserContectProvider>
  </React.StrictMode>
);
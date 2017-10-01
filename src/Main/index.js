import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import './App.css';

import {LoginPage} from "../Login/LoginPage";


class App extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('App', className)} {...props}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LoginPage />

      </div>
    );
  }
}

export default App;

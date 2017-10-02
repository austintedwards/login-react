// src/components/Login/index.js
import React, {PropTypes, Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import axios from 'axios';

import classnames from 'classnames';
import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";

import './style.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginVisible: true,
      signinVisible: false
    }
  }

  signIn(member) {
    console.log("signin", member);

    axios.get('http://localhost:8000/name/Sally').then(function(response) {
      console.log("response", response.data[0]);
    })

  }
  signUp(member) {
    console.log("signUp", member);
    axios.post(`http://localhost:8000/signup`, member)
    .then(function(response) {
      console.log("posted")
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const {
      className,
      ...props
    } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <div className="button-sign-form">
          <ButtonGroup>
            <Button active={this.state.loginVisible} color="primary" onClick={() => this.onLogin()}>Sign-in</Button>
            <Button active={this.state.signinVisible} color="primary" onClick={() => this.onSignin()}>Sign-up</Button>
          </ButtonGroup>
        </div>

        {this.state.loginVisible
          ? <SignIn onSignIn= {member => this.signIn(member)}/>
          : null
}
        {this.state.signinVisible
          ? <SignUp onSignUp= {member => this.signUp(member)}/>
          : null
}
      </div>

    )
  }

  onLogin() {
    this.setState({loginVisible: true, signinVisible: false});
  }
  onSignin() {
    this.setState({loginVisible: false, signinVisible: true});
  }

}

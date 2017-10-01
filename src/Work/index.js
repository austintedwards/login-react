// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

// import './style.css';

export default class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          PLEASE WORK NOW
        </h1>
      </div>
    );
  }
}

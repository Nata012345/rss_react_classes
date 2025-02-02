import { Component } from 'react';
import { MESSAGES } from '../../config.ts';

class Error extends Component {
  render() {
    return <div className="error">{MESSAGES.error}</div>;
  }
}

export default Error;

import { Component } from 'react';
import { MESSAGES } from '../../config.ts';

class Loader extends Component {
  render() {
    return <div className="loader">{MESSAGES.loading}</div>;
  }
}

export default Loader;

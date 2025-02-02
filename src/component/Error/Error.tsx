import { Component } from 'react';
import { MESSAGES } from '../../config.ts';
import styles from './Error.module.css';

class Error extends Component {
  render() {
    return <h2 className={styles.error}>{MESSAGES.error}</h2>;
  }
}

export default Error;

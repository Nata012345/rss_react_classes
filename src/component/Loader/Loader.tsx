import { Component } from 'react';
import { MESSAGES } from '../../config.ts';
import styles from './Loader.module.css';

class Loader extends Component {
  render() {
    return <h3 className={styles.loader}>{MESSAGES.loading}</h3>;
  }
}

export default Loader;

import { Component } from 'react';
import Posts from '../component/Posts/Posts.tsx';
import Button from '../component/Button/Button.tsx';
import Loader from '../component/Loader/Loader.tsx';
import { LABELBUTTONS, MESSAGES } from '../config.ts';
import Error from '../component/Error/Error.tsx';
import styles from './Results.module.css';

interface Result {
  id: number;
  title: string;
  body: string;
}

interface ResultsProps {
  loading: boolean;
  error: string | null;
  results: Result[];
  throwError: () => void;
}

class Results extends Component<ResultsProps> {
  render() {
    const { loading, error, results, throwError } = this.props;
    return (
      <div className={styles.containerResults}>
        <h2>Results</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : results.length === 0 ? (
          <p>{MESSAGES.emptyAnswer}</p>
        ) : (
          <Posts posts={results} />
        )}
        <div className={styles.containerButton}>
          <Button onClick={throwError} label={LABELBUTTONS.error} />
        </div>
      </div>
    );
  }
}
export default Results;

import { Component } from 'react';
import Posts from '../Posts/Posts.tsx';
import Button from '../Button/Button.tsx';
import Loader from '../Loader/Loader.tsx';
import { LABELBUTTONS, MESSAGES } from '../../config.ts';
import Error from '../Error/Error.tsx';
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
  className: string;
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
          <h2>{MESSAGES.emptyAnswer}</h2>
        ) : (
          <Posts posts={results} />
        )}
        {!loading && (
          <div className={styles.containerButton}>
            <Button
              className="buttonThrowError"
              onClick={throwError}
              label={LABELBUTTONS.error}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Results;

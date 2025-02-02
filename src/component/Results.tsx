import { Component } from 'react';
import Posts from './Posts/Posts.tsx';
import Button from './Button/Button.tsx';
import Loader from './Loader/Loader.tsx';
import { LABELBUTTONS, MESSAGES } from '../config.ts';
import Error from './Error/Error.tsx';

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
      <div>
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
        <Button onClick={throwError} label={LABELBUTTONS.error} />
      </div>
    );
  }
}
export default Results;

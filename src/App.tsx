import { Component } from 'react';
import ErrorBoundary from './component/ErrorBoundary.tsx';
import SearchContainer from './component/SearchContainer/SearchContainer.tsx';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchContainer />
      </ErrorBoundary>
    );
  }
}

export default App;

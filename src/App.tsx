import React, { Component, ErrorInfo } from 'react';
import axios from 'axios';

interface State {
  searchTerm: string;
  results: { name: string; description: string }[];
  loading: boolean;
  error: string | null;
}

// class ErrorBoundary extends Component<
//   { children: React.ReactNode },
//   { hasError: boolean }
// > {
//   constructor(props: { children: React.ReactNode }) {
//     super(props);
//     this.state = { hasError: false };
//   }
//
//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }
//
//   componentDidCatch(error: Error, info: ErrorInfo) {
//     console.error('Error caught by boundary:', error, info);
//   }
//
//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong. Please reload the page.</h2>;
//     }
//     return this.props.children;
//   }
// }

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
      results: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchResults();
  }

  fetchResults = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await axios.get('https://api.example.com/search', {
        params: { query: this.state.searchTerm.trim() || 'all' },
      });
      this.setState({ results: response.data, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to fetch data', loading: false });
    }
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    localStorage.setItem('searchTerm', this.state.searchTerm.trim());
    this.fetchResults();
  };

  throwError = () => {
    throw new Error('Test Error');
  };

  render() {
    return (
      <ErrorBoundary>
        <div style={{maxWidth: "70%", display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <div style={{display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <div style={{padding: '20px', borderBottom: '1px solid #ddd'}}>
              <input
                  type="text"
                  value={this.state.searchTerm}
                  onChange={this.handleSearchChange}
              />
              <button onClick={this.handleSearch}>Search</button>
              <button onClick={this.throwError}>Throw Error</button>
            </div>
            <div style={{padding: '20px'}}>
              {this.state.loading ? (
                  <p>Loading...</p>
              ) : this.state.error ? (
                  <p style={{color: 'red'}}>{this.state.error}</p>
              ) : (
                  <ul>
                    {this.state.results.map((item, index) => (
                        <li key={index}>
                          <strong>{item.name}</strong>: {item.description}
                        </li>
                    ))}
                  </ul>
              )}
            </div>
          </div>
        </div>

      </ErrorBoundary>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchInput from './SearchInput/SearchInput.tsx';
import Button from './Button/Button.tsx';
import Posts from './Posts/Posts.tsx';
import fetchResults from '../services/services.js';

interface State {
  searchTerm: string;
  results: { id: number; title: string; body: string }[];
  loading: boolean;
  error: string | null;
}

class SearchContainer extends Component<object, State> {
  constructor(props: object) {
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
      const results = await fetchResults(this.state.searchTerm);
      this.setState({ results, loading: false });
    } catch {
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
      <div
        style={{
          maxWidth: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '20px',
              borderBottom: '1px solid #ddd',
            }}
          >
            <h2>Top controls</h2>
            <div>
              <SearchInput
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
              />
              <Button onClick={this.handleSearch} label="Search" />
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <h2>Results</h2>
            {this.state.loading ? (
              <p>Loading...</p>
            ) : this.state.error ? (
              <p style={{ color: 'red' }}>{this.state.error}</p>
            ) : (
              <Posts posts={this.state.results} />
            )}
            <Button
              onClick={this.throwError}
              label="Throw Error"
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContainer;

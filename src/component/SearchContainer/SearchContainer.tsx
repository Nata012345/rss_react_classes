import React, { Component } from 'react';
import fetchResults from '../../services/services.tsx';
import Controls from '../Controls/Controls.tsx';
import Results from '../Results/Results.tsx';
import styles from './SearchContainer.module.css';

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
    const query = this.state.searchTerm.trim();
    this.setState({ loading: true, error: null });
    try {
      const results = await fetchResults(query || '');
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
    this.setState(() => {
      throw new Error('Test Error');
    });
  };

  render() {
    return (
      <main className={styles.container}>
        <Controls
          searchTerm={this.state.searchTerm}
          onSearchChange={this.handleSearchChange}
          onSearch={this.handleSearch}
        />
        <Results
          loading={this.state.loading}
          error={this.state.error}
          results={this.state.results}
          throwError={this.throwError}
        />
      </main>
    );
  }
}

export default SearchContainer;

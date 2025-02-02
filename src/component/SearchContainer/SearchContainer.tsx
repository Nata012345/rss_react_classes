import React, { Component } from 'react';
import fetchResults from '../../services/services.tsx';
import Controls from '../Controls/Controls.tsx';
import Results from '../../Results/Results.tsx';
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
  // componentDidMount() {
  //   if (this.state.searchTerm) {
  //     this.fetchResults();
  //   }
  // }
  // componentDidUpdate(prevProps: object, prevState: State) {
  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     this.fetchResults();
  //   }
  // }

  fetchResults = async () => {
    const query = this.state.searchTerm.trim();
    this.setState({ loading: true, error: null });
    setTimeout(async () => {
      try {
        const results = await fetchResults(query || '');
        this.setState({ results, loading: false });
      } catch {
        this.setState({ error: 'Failed to fetch data', loading: false });
      }
    }, 2000);
    // try {
    //   const results = await fetchResults(this.state.searchTerm);
    //   this.setState({ results, loading: false });
    // } catch {
    //   this.setState({ error: 'Failed to fetch data', loading: false });
    // }
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
        {/*<div className={styles.containerControls}>*/}
        <Controls
          searchTerm={this.state.searchTerm}
          onSearchChange={this.handleSearchChange}
          onSearch={this.handleSearch}
        />
        {/*</div>*/}
        {/*<div className={styles.containerResults}>*/}
        <Results
          loading={this.state.loading}
          error={this.state.error}
          results={this.state.results}
          throwError={this.throwError}
        />
        {/*</div>*/}

        {/*<div style={{ padding: '20px' }}>*/}
        {/*  <h2>Results</h2>*/}
        {/*  {this.state.loading ? (*/}
        {/*    <p>Loading...</p>*/}
        {/*  ) : this.state.error ? (*/}
        {/*    <p style={{ color: 'red' }}>{this.state.error}</p>*/}
        {/*  ) : (*/}
        {/*    <Posts posts={this.state.results} />*/}
        {/*  )}*/}
        {/*  <Button*/}
        {/*    onClick={this.throwError}*/}
        {/*    label="Throw Error"*/}
        {/*    style={{*/}
        {/*      marginLeft: '10px',*/}
        {/*      backgroundColor: 'red',*/}
        {/*      color: 'white',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</div>*/}
      </main>
    );
  }
}

export default SearchContainer;

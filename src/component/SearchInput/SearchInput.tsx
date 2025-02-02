import React, { Component } from 'react';
import { PLACEHOLDERS } from '../../config.ts';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchInput extends Component<SearchInputProps> {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={PLACEHOLDERS.search}
        className={styles.input}
      />
    );
  }
}

export default SearchInput;

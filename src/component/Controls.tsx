import React, { Component } from 'react';
import SearchInput from './SearchInput/SearchInput.tsx';
import Button from './Button/Button.tsx';
import { LABELBUTTONS } from '../config.ts';

interface ControlsProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}
class Controls extends Component<ControlsProps> {
  render() {
    const { searchTerm, onSearchChange, onSearch } = this.props;
    return (
      <div>
        <h2>Top controls</h2>
        <div>
          <SearchInput value={searchTerm} onChange={onSearchChange} />
          <Button onClick={onSearch} label={LABELBUTTONS.search} />
        </div>
      </div>
    );
  }
}
export default Controls;

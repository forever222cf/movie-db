import React from 'react';
import {
  StyledSearchBar,
  StyledInput
} from './styles';

export default function SearchBar({ searchQuery, handleChangeInput, handleKeyUp }) {
  return (
    <StyledSearchBar>
      <StyledInput
        value={searchQuery}
        onChange={handleChangeInput}
        onKeyUp={handleKeyUp}
        placeholder="Search Movie" />
    </StyledSearchBar>
  );
}

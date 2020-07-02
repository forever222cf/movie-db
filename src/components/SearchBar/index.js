import React from 'react';
import {
  StyledSearchBar,
  StyledInput
} from './styles';

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledInput placeholder="Search Movie" />
    </StyledSearchBar>
  )
}

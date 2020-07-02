import React from 'react';
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledSearchBarWrapper
} from './styles';
import SearchBar from './../SearchBar';
import Logo from './../Logo';

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledSearchBarWrapper>
        <SearchBar />
      </StyledSearchBarWrapper>
    </StyledHeader>
  )
}

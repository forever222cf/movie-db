import React from 'react';
import {
  StyledHeader,
  StyledLogoWrapper,
  StyledSearchBarWrapper
} from './styles';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQuery, fetchMovieList } from '../App/actions';

export default function Header() {
  const searchQuery = useSelector(state => state.movies.searchQuery);

  const dispatch = useDispatch();

  const handleChangeInput = event => {
    dispatch(updateSearchQuery(event.target.value));
  }

  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      // Fetch movie
      console.log('Fetching', searchQuery)
      dispatch(fetchMovieList(searchQuery))
    }
  }

  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledSearchBarWrapper>
        <SearchBar
          searchQuery={searchQuery}
          handleChangeInput={handleChangeInput}
          handleKeyUp={handleKeyUp} />
      </StyledSearchBarWrapper>
    </StyledHeader>
  )
}

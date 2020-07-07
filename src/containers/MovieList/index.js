import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import { StyledMovieList } from './styles';

export default function MovieList() {
  const movieList = useSelector(state => state.movies.movieList);
  
  return (
    <StyledMovieList>
      {
        movieList.map(movie => (
          <Card movieTitle={movie.title} movieThumbnail={movie.image} key={movie.id} />
        ))
      }
    </StyledMovieList>
  )
}

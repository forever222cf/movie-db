import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import { StyledMovieList } from './styles';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';

export default function MovieList() {
  const movieList = useSelector(state => state.movies.movieList);

  const isFetching = useSelector(state => state.movies.isFetching);

  const history = useHistory();

  const navigateToDetail = movieId => {
    history.push(`/${movieId}`);
  }
  
  return (
    <StyledMovieList>
      {
        isFetching ? (
          <Loading />
        ) : movieList.map(movie => (
          <Card
            movieTitle={movie.title}
            movieThumbnail={movie.image}
            key={movie.id}
            handleClickCard={() => navigateToDetail(movie.id)} />
        ))
      }
    </StyledMovieList>
  )
}

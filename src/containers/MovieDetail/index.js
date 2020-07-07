import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledDetail } from './styles';
import { fetchMovie } from '../../services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsFetching } from '../App/actions';
import Loading from '../../components/Loading';

export default function MovieDetail() {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const isFetching = useSelector(state => state.movies.isFetching);

  const [ movieData, setMovieData ] = useState({});

  const getMovieData = async () => {
    try {
      // Set isFetching to true
      dispatch(updateIsFetching(true));
      const response = await fetchMovie(movieId);
      if (response && response.status === 200) {
        setMovieData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Set isFetching to false
      dispatch(updateIsFetching(false));
    }
  }

  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isFetching ? (
      <Loading />
    ) : (
      <StyledDetail>
        {JSON.stringify(movieData)}
      </StyledDetail>
    )
  );
}

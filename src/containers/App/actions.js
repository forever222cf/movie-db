import {
  UPDATE_SEARCH_QUERY,
  UPDATE_IS_FETCHING,
  UPDATE_MOVIE_LIST
} from './constants';
import { fetchMovies } from './../../services/movies';

export const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  searchQuery
});

export const updateIsFetching = payload => ({
  type: UPDATE_IS_FETCHING,
  payload
});

export const updateMovieList = movieList => ({
  type: UPDATE_MOVIE_LIST,
  movieList
});

export const fetchMovieList = searchQuery => async (dispatch) => {
  try {
    // Set loading state to true
    dispatch(updateIsFetching(true));
    let response = await fetchMovies(searchQuery);
    if (response && response.status === 200) {
      dispatch(updateMovieList(response.data.titles));
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Set loading state to false
    dispatch(updateIsFetching(false));
  }
};

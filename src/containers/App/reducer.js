import set from 'lodash/fp/set';
import {
  UPDATE_SEARCH_QUERY,
  UPDATE_IS_FETCHING,
  UPDATE_MOVIE_LIST
} from './constants';

const initialState = {
  searchQuery: '',
  isFetching: false,
  movieList: []
};

const movies = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_QUERY:
      const { searchQuery } = action;
      return set('searchQuery', searchQuery)(state);
    case UPDATE_IS_FETCHING:
      const { payload } = action;
      return set('isFetching', payload)(state);
    case UPDATE_MOVIE_LIST:
      const { movieList } = action;
      return set('movieList', movieList)(state);
    default:
      return state;
  }
};

export default movies;

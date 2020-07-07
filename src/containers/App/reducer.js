import set from 'lodash/fp/set';
import {
  UPDATE_SEARCH_QUERY,
  UPDATE_IS_FETCHING,
  UPDATE_MOVIE_LIST
} from './constants';

const initialState = {
  searchQuery: '',
  isFetching: false,
  movieList: [
    {
      "title":"RED",
      "image":"https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@.jpg",
      "id":"tt1245526"
    },
    {
      "title":"Three Colors: Red",
      "image":"https://m.media-amazon.com/images/M/MV5BYTg1MmNiMjItMmY4Yy00ZDQ3LThjMzYtZGQ0ZTQzNTdkMGQ1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
      "id":"tt0111495"
    },
    {
      "title":"Red",
      "image":"https://m.media-amazon.com/images/M/MV5BMTI5YmYzNjQtOWU5NC00NTI5LWE4YzYtNTZlNWE2YjEyMzcyXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
      "id":"tt0972883"
    },
    {
      "title":"Law & Order: Special Victims Unit",
      "image":"https://m.media-amazon.com/images/M/MV5BMDdlZTMyNjAtNWUyNS00ZGRlLThlMmEtODAyOTYzMjE3NTA0XkEyXkFqcGdeQXVyODUxOTU0OTg@.jpg",
      "id":"tt0203259"
    }
  ]
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

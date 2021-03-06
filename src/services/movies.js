import api from './api';
import env from './../utils/env';

export const fetchMovies = searchQuery => {
  return api.get({
    url: `${env.BASE_URL}/${env.API.SEARCH}/${searchQuery}`
  });
}

export const fetchMovie = movieId => {
  return api.get({
    url: `${env.BASE_URL}/${env.API.DETAIL}/${movieId}`
  });
}

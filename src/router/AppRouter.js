import React from 'react';
import MovieList from '../containers/MovieList';
import MovieDetail from '../containers/MovieDetail';
import { Switch, Route } from 'react-router-dom';

export const routes = [
  {
    name: 'home',
    label: 'Home Page',
    path: '/',
    exact: true,
    component: MovieList
  },
  {
    name: 'detail',
    label: 'Detail',
    path: '/:movieId',
    exact: false,
    component: MovieDetail
  }
]

export default function AppRouter() {
  return (
    <Switch>
      {
        routes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.name} />)
      }
    </Switch>
  );
}

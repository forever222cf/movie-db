import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  StyledApp
} from './styles';
import Header from './../../components/Header';
import MovieDetail from './../../containers/MovieDetail';
import MovieList from './../../containers/MovieList';

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/:movieId" component={MovieDetail} />
        <Route component={MovieList} />
      </Switch>
    </StyledApp>
  )
}

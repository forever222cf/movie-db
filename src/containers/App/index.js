import React from 'react';
import {
  StyledApp
} from './styles';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from '../Header';
import AppRouter from '../../router/AppRouter';

export default function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </StyledApp>
  );
}

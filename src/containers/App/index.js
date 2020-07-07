import React from 'react';
import {
  StyledApp,
  StyledAppContent
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
          <StyledAppContent>
            <AppRouter />
          </StyledAppContent>
      </Router>
    </StyledApp>
  );
}

import React from 'react';
import logo from './../../assets/images/logo.svg';
import { StyledLogo } from './styles';

export default function Logo () {
  return (
    <StyledLogo src={logo} alt="app-logo" />
  )
}

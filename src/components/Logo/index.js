import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Dragon Finder" />
      </Link>
    </Container>
  );
};

export default Logo;

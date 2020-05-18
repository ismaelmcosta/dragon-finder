import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} className="logo" alt="Dragon Finder" />
        <h2>Acesse sua conta.</h2>
        <p>Digite seus dados para acessar o sistema.</p>
        <form>
          <input name="email" type="email" placeholder="Seu e-mail" />
          <input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">
            <FiLogIn size={16} color="#Fff" />
            Login
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default SignIn;

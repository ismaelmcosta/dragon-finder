import React from 'react';

import { FiPlus, FiLogOut } from 'react-icons/fi';

import { Container, Content, Buttons } from './styles';

import Logo from '~/components/Logo';

function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Buttons>
          <button type="button">
            <FiPlus size={16} color="#Fff" />
            Novo Dragão
          </button>

          <button className="logout" type="button">
            <FiLogOut size={16} color="#Fff" />
            Sair
          </button>
        </Buttons>
      </Content>
    </Container>
  );
}

export default Header;

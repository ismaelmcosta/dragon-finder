import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { FiPlus, FiLogOut } from 'react-icons/fi';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Buttons } from './styles';

import Logo from '~/components/Logo';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Buttons>
          <button type="button" onClick={() => history.push('/dragon/new')}>
            <FiPlus size={16} color="#Fff" />
            Novo Dragão
          </button>

          <button className="logout" type="button" onClick={handleSignOut}>
            <FiLogOut size={16} color="#Fff" />
            Sair
          </button>
        </Buttons>
      </Content>
    </Container>
  );
}

export default Header;

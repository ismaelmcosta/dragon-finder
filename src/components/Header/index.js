import React from 'react';

import { useDispatch } from 'react-redux';

import { FiPlus, FiLogOut } from 'react-icons/fi';

import { signOut } from '~/store/modules/auth/actions';

import history from '~/services/history';

import { Container, Content, Buttons } from './styles';

import Logo from '~/components/Logo';

function Header() {
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

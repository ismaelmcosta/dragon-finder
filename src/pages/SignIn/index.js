import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { FiLogIn } from 'react-icons/fi';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

function SignIn() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  function onSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logo} className="logo" alt="Dragon Finder" />
        <h2>Acesse sua conta.</h2>
        <p>Digite seus dados para acessar o sistema.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            ref={register({ required: true })}
          />
          <input
            name="password"
            type="password"
            placeholder="Sua senha"
            ref={register({ required: true })}
          />

          <button type="submit">
            {loading ? (
              <>Carregando...</>
            ) : (
              <>
                <FiLogIn size={16} color="#Fff" />
                Login
              </>
            )}
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default SignIn;

import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { addDragonRequest } from '~/store/modules/dragons/actions';

import { Container, Content, ContentBox } from './styles';

function Dragon() {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = data => {
    dispatch(addDragonRequest({ data }));

    history.push('/dragons');
  };

  useEffect(() => {
    const countErrors = Object.keys(errors).length;
    if (countErrors > 0) {
      toast.error('Todos os campos são obritatórios.', {
        autoClose: 3000,
        containerId: 'alerts',
      });
    }
  }, [errors]);

  return (
    <Container>
      <Content>
        <ContentBox>
          <h1>Adicone um novo dragão</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              Nome do Dragão
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite o nome"
                ref={register({ required: true })}
              />
            </label>
            {errors.name && (
              <span className="inputError">
                O nome do dragão é obritatório.
              </span>
            )}
            <label htmlFor="type">
              Tipo do Dragão
              <input
                id="type"
                name="type"
                type="text"
                placeholder="Digite o tipo"
                ref={register({ required: true })}
              />
            </label>
            {errors.type && (
              <span className="inputError">O tipo é obritatório.</span>
            )}

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </ContentBox>
      </Content>
    </Container>
  );
}

export default Dragon;

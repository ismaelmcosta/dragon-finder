import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  addDragonRequest,
  updateDragonRequest,
} from '~/store/modules/dragons/actions';

import { Container, Content, ContentBox } from './styles';

function Dragon({ match }) {
  const [dragonId, setDragonId] = useState(null);
  const [dragonName, setDragonName] = useState(null);
  const [dragonType, setDragonType] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    if (dragonId) {
      dispatch(updateDragonRequest({ ...data, id: dragonId }));
    } else {
      dispatch(addDragonRequest({ data }));
    }

    setTimeout(() => {
      history.push('/dragons');
    }, 1000);
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

  const getDragonByID = async id => {
    try {
      const response = await api.get(`dragon/${id}`);
      setDragonName(response.data.name);
      setDragonType(response.data.type);
    } catch (error) {
      toast.error('Ocorreu um erro.', {
        autoClose: 3000,
        containerId: 'alerts',
      });
    }
  };

  useEffect(() => {
    if (match.params.id) {
      setDragonId(match.params.id);
    }
  }, [match]);

  useEffect(() => {
    if (dragonId) {
      getDragonByID(dragonId);
    }
  }, [dragonId]);

  return (
    <Container>
      <Content>
        <ContentBox>
          {dragonId && <h1>Atualizar dragão</h1>}
          {!dragonId && <h1>Adicione um novo dragão</h1>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              Nome do Dragão
              <input
                id="name"
                name="name"
                defaultValue={dragonName || ''}
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
                defaultValue={dragonType || ''}
                type="text"
                placeholder="Digite o tipo"
                ref={register({ required: true })}
              />
            </label>
            {errors.type && (
              <span className="inputError">O tipo é obritatório.</span>
            )}

            {dragonId ? (
              <button className="button" type="submit">
                Atualizar
              </button>
            ) : (
              <button className="button" type="submit">
                Cadastrar
              </button>
            )}
          </form>
        </ContentBox>
      </Content>
    </Container>
  );
}

export default Dragon;

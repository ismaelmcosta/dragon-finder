import React, { useEffect, useState } from 'react';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import { format } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import { Container, Content, TypeDragon } from './styles';

function Dragons() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    async function getDragons() {
      try {
        const response = await api.get('dragon');
        setDragons(response.data);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getDragons();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Dragões cadastrados (3)</h1>

        <ul>
          {dragons.map(({ id, name, type, imageUrl, createdAt }) => {
            return (
              <li key={id}>
                <img
                  src={
                    imageUrl ||
                    'https://www.centralpagwc.com/HersheyProjects/Keira/Dragon.jpg'
                  }
                  alt={name}
                />

                <h2>{name}</h2>

                <span> {type}</span>

                <strong>
                  {format(new Date(`${createdAt}`), 'dd/MM/yyyy - HH:mm:ss', {
                    locale: ptBR,
                  })}
                </strong>

                <button type="button" onClick={() => {}}>
                  <FiEdit size={20} color="#41414d" />
                </button>
                <button className="delete" type="button" onClick={() => {}}>
                  <FiTrash2 size={20} color="#ef2e4f" />
                </button>
              </li>
            );
          })}
        </ul>
      </Content>
    </Container>
  );
}

export default Dragons;

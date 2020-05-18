import React, { useEffect, useState } from 'react';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import Swal from 'sweetalert2';

import { toast } from 'react-toastify';

import { format } from 'date-fns';

import { useHistory } from 'react-router-dom';

import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import { Container, Content } from './styles';

function Dragons() {
  const [dragons, setDragons] = useState([]);

  const history = useHistory();

  const getDragons = async () => {
    try {
      const response = await api.get('dragon');
      setDragons(response.data);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const deleteDragon = async id => {
    try {
      await api.delete(`dragon/${id}`);

      setDragons(dragons.filter(dragon => dragon.id !== id));

      return toast.success('Dragão deletado com sucesso!', {
        autoClose: 3000,
        containerId: 'alerts',
      });
    } catch (error) {
      return toast.error('Falha ao deletar o dragão.', {
        autoClose: 3000,
        containerId: 'alerts',
      });
    }
  };

  const editDragon = id => {
    history.push(`/dragon/edit/${id}`);
  };

  useEffect(() => {
    getDragons();
  }, []);

  const deleteDragonConfirm = id => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008489',
      cancelButtonColor: '#ef2e4f',
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.value) {
        deleteDragon(id);
      }
    });
  };

  return (
    <Container>
      <Content>
        <h1>Dragões cadastrados {`(${dragons.length})`}</h1>

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

                <button type="button" onClick={() => editDragon(id)}>
                  <FiEdit size={20} color="#41414d" />
                </button>
                <button
                  className="delete"
                  type="button"
                  onClick={() => deleteDragonConfirm(id)}
                >
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

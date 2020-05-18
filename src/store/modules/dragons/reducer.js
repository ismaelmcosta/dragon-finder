import produce from 'immer';

import { toast } from 'react-toastify';

const INITIAL_STATE = [];

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dragon/ADD_DRAGON_REQUEST': {
        const dragon = action.payload.data;

        draft.push(dragon);
        break;
      }

      case '@dragon/ADD_DRAGON_SUCCESS': {
        toast.success('Dragão criado com sucesso!', {
          autoClose: 3000,
          containerId: 'alerts',
        });

        break;
      }

      case '@dragon/UPDATE_DRAGON_SUCCESS': {
        toast.success('Dragão atualizado com sucesso!', {
          autoClose: 3000,
          containerId: 'alerts',
        });

        break;
      }

      default:
    }
  });
}

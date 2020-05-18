import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { addDragonSuccess, addDragonFailure } from './actions';

export function* addDragon({ payload }) {
  const { name, type } = payload.data;

  try {
    yield call(api.post, 'dragon', {
      name,
      type,
    });

    yield put(addDragonSuccess(payload));
  } catch (err) {
    yield put(addDragonFailure());
    return toast.error('Falha ao criar dragão!', {
      autoClose: 3000,
      containerId: 'alerts',
    });
  }
}

export default all([takeLatest('@dragon/ADD_DRAGON_REQUEST', addDragon)]);

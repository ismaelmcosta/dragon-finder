import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import authMock from '~/services/auth';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    yield call(authMock, {
      email,
      password,
    });

    yield put(signInSuccess(email));

    return history.push('/dragons');
  } catch (err) {
    yield put(signFailure());
    return toast.error('Falha na autenticação, verifique seus dados', {
      autoClose: 3000,
      containerId: 'alerts',
    });
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

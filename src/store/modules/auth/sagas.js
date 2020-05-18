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
  } catch (err) {
    yield put(signFailure());
    return toast.error('Falha na autenticação, verifique seus dados', {
      autoClose: 3000,
      containerId: 'alerts',
    });
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

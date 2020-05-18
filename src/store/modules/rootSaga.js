import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import dragons from './dragons/sagas';

export default function* rootSaga() {
  return yield all([auth, dragons]);
}

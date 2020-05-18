import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dragons from './dragons/reducer';

export default combineReducers({
  auth,
  dragons,
});

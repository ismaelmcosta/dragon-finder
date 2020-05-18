export function addDragonRequest(data) {
  return {
    type: '@dragon/ADD_DRAGON_REQUEST',
    payload: data,
  };
}

export function updateDragonRequest(data) {
  return {
    type: '@dragon/UPDATE_DRAGON_REQUEST',
    payload: data,
  };
}
export function updateDragonSuccess() {
  return {
    type: '@dragon/UPDATE_DRAGON_SUCCESS',
  };
}

export function addDragonSuccess(dragon) {
  return {
    type: '@dragon/ADD_DRAGON_SUCCESS',
    payload: { dragon },
  };
}

export function addDragonFailure() {
  return {
    type: '@dragon/ADD_DRAGON_FAILURE',
  };
}

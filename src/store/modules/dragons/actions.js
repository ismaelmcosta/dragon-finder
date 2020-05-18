export function addDragonRequest(data) {
  return {
    type: '@dragon/ADD_DRAGON_REQUEST',
    payload: data,
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

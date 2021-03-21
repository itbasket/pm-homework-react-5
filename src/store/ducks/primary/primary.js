import types from './types';

const initialState = {
  firstName: '',
  lastName: '',
  position: '',
  phone: '',
  email: '',
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_PRIM_FORM:
      return {
        ...state, ...action.payload
      }
    default: return state;
  }
}

export function saveForm(data) {
  return {
    type: types.SAVE_PRIM_FORM,
    payload: data
  }
}


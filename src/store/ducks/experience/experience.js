import types from './types';

const initialState = {
    places: [
      {
        name: '',
        position: '',
        startDate: '',
        finishDate: '',
      },
    ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_EXP_FORM:
      return {
        ...state, ...action.payload
      }
    default: return state;
  }
}

export function saveForm(data) {
  return {
    type: types.SAVE_EXP_FORM,
    payload: data
  }
}


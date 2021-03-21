import types from './types';

const initialState = {
    places: [
      {
        name: '',
        specialty: '',
        startDate: '',
        finishDate: '',
      },
    ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_ED_FORM:
      return {
        ...state, ...action.payload
      }
    default: return state;
  }
}

export function saveForm(data) {
  return {
    type: types.SAVE_ED_FORM,
    payload: data
  }
}


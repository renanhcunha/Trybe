import { REQUEST_INFO, RECEIVE_INFO, FAILED_REQUEST } from '../actions'

const initialState = {
  isFetching: false,
  info: {},
  error: '',
};

export default function reducer(state = initialState, { type, info, error }) {
  switch (type) {
    case REQUEST_INFO:
      return { ...state, isFetching: true }
    
    case RECEIVE_INFO:
      return { ...state, info: info[0], isFetching: false }

    case FAILED_REQUEST:
      return { ...state, error: error, isFetching: false }

    default: 
     return { state }
  }
}
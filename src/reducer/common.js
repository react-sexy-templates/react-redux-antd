import { CLEAR, PUT } from '../actions/commons'

const initialState = {
  
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR:
      return initialState
    case PUT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

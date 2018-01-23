import { CLEAR, PUT, initialState } from '../actions/common'

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR:
      return initialState
    case PUT:
      return {
        ...state,
        ...action.update,
      }
    default:
      return state
  }
}

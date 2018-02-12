import { ADD_NUM, ADD_ASYNC_NUM } from '@/actions/home'

const initialState = {
  num: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NUM:
    case ADD_ASYNC_NUM:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

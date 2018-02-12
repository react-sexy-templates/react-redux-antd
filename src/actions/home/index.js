export const ADD_NUM = 'ADD_NUM'
export const ADD_ASYNC_NUM = 'ADD_ASYNC_NUM'

export function addNum (num) {
  return {
    type: ADD_NUM,
    payload: {
      num,
    }
  }
}

export const addAsyncNum = num => dispatch => {
  setTimeout(() => {
    dispatch({
      type: ADD_NUM,
      payload: {
        num,
      }
    })
  }, 1000)
}
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@/reducer'

const enhancer = compose(applyMiddleware(thunkMiddleware))

export default createStore(rootReducer, enhancer)
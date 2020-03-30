import { createStore, combineReducers } from 'redux'
import { trailerReducer } from './trailer/trailerReducer'

const devTools =
  process.env.NODE_ENV === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
  combineReducers({
    trailer: trailerReducer
  }),
  {},
  devTools
)

export type StateType = ReturnType<typeof store.getState>

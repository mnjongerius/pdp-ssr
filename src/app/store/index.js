import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import { initSagas, rootSaga } from '../sagas'
import { blogLoadInit } from '../actions'

const sagaMiddleware = createSagaMiddleware()

export function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )
  initSagas(sagaMiddleware)
  sagaMiddleware.run(rootSaga)
  store.dispatch(blogLoadInit())

  return store
}
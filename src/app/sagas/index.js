import { fork } from 'redux-saga/effects'
import blog from './blog'

const sagas = [
  blog
]

export const rootSaga = function * () {
  for (const saga of sagas) {
    yield fork(saga)
  }
}

export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))

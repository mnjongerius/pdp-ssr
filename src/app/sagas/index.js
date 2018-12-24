import { takeLatest, put, all, fork } from 'redux-saga/effects'
import { loadBlogSuccess } from '../actions'

const getBlogPosts = function * () {
  yield put(loadBlogSuccess([]))
}

const blog = function * () {
  yield all([
    takeLatest('FOOOOOO', getBlogPosts)
  ])
}

export const rootSaga = function * () {
  yield fork(blog)
}

const sagas = [
  blog
]

export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))

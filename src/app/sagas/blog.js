import { takeLatest, put, all } from 'redux-saga/effects'
import { blogLoadSuccess } from '../actions'
import TYPES from '../types'

const blogLoadInit = function * () {
  // fetch from remote
  // put in state
  yield put(blogLoadSuccess([]))
}

export default function * () {
  yield all([
    takeLatest(TYPES.BLOG.BLOG_LOAD_INIT, blogLoadInit)
  ])
}

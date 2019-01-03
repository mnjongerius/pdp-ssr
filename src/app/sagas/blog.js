import { takeLatest, put, all } from 'redux-saga/effects'
import { blogLoadSuccess } from '../actions'
import TYPES from '../types'
import { getPosts } from '../api'

const blogLoadInit = function * () {
  console.log('blogLoadInit')
  // fetch from remote
  const { data } = yield(getPosts())
  // put in state
  yield put(blogLoadSuccess(data))
}

export default function * () {
  yield all([
    takeLatest(TYPES.BLOG.BLOG_LOAD_INIT, blogLoadInit)
  ])
}

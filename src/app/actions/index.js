import TYPES from '../types'

export function blogLoadInit () {
  return { type: TYPES.BLOG.BLOG_LOAD_INIT }
}

export function blogLoadSuccess (posts) {
  return { type: TYPES.BLOG.BLOG_LOAD_SUCCESS, posts }
}

import TYPES from '../types'

export function blogLoadSuccess (posts) {
  return { type: TYPES.BLOG.BLOG_LOAD_SUCCESS, posts }
}

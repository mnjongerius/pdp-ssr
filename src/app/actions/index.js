import TYPES from '../types'

export function blogLoadInit () {
  console.log('creating blogLoadInit')
  return { type: TYPES.BLOG.BLOG_LOAD_INIT }
}

export function blogLoadSuccess (entries) {
  return { type: TYPES.BLOG.BLOG_LOAD_SUCCESS, entries }
}
